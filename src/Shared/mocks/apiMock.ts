import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Insight } from "../Types";
import { formatDate } from "../Utils/date";
import { SEVERTIES, TYPES_NUMBER, TYPES } from "../Constants/inisight-consts";

// Create an instance of MockAdapter on the default instance
const mock = new MockAdapter(axios);

const generateMockInsights = (count: number): Insight[] => {
  const insights: Insight[] = [];

  for (let i = 1; i <= count; i++) {
    const date = new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60)
    );

    const severity = SEVERTIES[
      Math.floor(Math.random() * SEVERTIES.length)
    ] as Insight["severity"];

    const type = TYPES[
      Math.floor(Math.random() * TYPES.length)
    ] as Insight["type"];

    insights.push({
      insight_id: i.toString(),
      created_at: formatDate(date),
      type,
      severity,
      typeNumber: TYPES_NUMBER[type],
    });
  }

  return insights;
};

const mockInsights = generateMockInsights(10);

// Mock the GET /insights endpoint
mock.onGet("/insights").reply((config) => {
  const fromDate = new Date(config.params.from_date);

  const filteredInsights = mockInsights.filter((insight) => {
    return new Date(insight.created_at).getTime() >= fromDate.getTime();
  });
  return [200, filteredInsights];
});

// Mock the POST /insights endpoint
mock.onPost("/insights").reply((config) => {
  const newDiagnostic = JSON.parse(config.data) as Omit<Insight, "insight_id">;
  const newInsight = {
    ...newDiagnostic,
    insight_id: String(mockInsights.length + 1),
  };
  mockInsights.push(newInsight);
  return [200, { insight_id: newInsight.insight_id }];
});

export default mock;

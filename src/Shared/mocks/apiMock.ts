import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Insight } from "../Types";

// Create an instance of MockAdapter on the default instance
const mock = new MockAdapter(axios);

const generateMockInsights = (count: number): Insight[] => {
  const types = ["bearing", "gear", "motor"];
  const severities = ["healthy", "alarm", "critical"];
  const severityNumber = { healthy: 0, alarm: 1, critical: 2 };
  const insights: Insight[] = [];

  for (let i = 1; i <= count; i++) {
    const date = new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60)
    );

    const severity = severities[
      Math.floor(Math.random() * severities.length)
    ] as "healthy" | "alarm" | "critical";
    insights.push({
      insight_id: i.toString(),
      created_at: date.toISOString().replace("T", " ").substring(0, 19),
      type: types[Math.floor(Math.random() * types.length)] as
        | "bearing"
        | "gear"
        | "motor",
      severity: severity,
      severityNumber: severityNumber[severity],
    });
  }

  return insights;
};

const mockInsights = generateMockInsights(10);

// Mock the GET /insights endpoint
mock.onGet("/insights").reply((config) => {
  const fromDate = new Date(config.params.from_date);
  const filteredInsights = mockInsights.filter(
    (insight) => new Date(insight.created_at) >= fromDate
  );
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

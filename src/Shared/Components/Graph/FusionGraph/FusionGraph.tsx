import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GraphContainer, GraphContainerProps } from "../shared/GraphContainer";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

type FusionGraphProps<T> = {
  data: T[];
  xAxisDataKay: keyof T;
  lineDataKey: keyof T;
  CustomToolTipContent: ReactElement;
} & Pick<GraphContainerProps, "onFilterChange" | "filterValue">;

export const FusionGraph = <T extends object>({
  data,
  xAxisDataKay,
  lineDataKey,
  CustomToolTipContent,
  ...rest
}: FusionGraphProps<T>) => {
  return (
    <GraphContainer title="Fusion trend" Icon={faChartLine} {...rest}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKay as string} />
          <Tooltip content={CustomToolTipContent} />
          <Line
            type="monotone"
            dataKey={lineDataKey as string}
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

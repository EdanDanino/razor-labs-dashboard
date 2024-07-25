import { ReactElement, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Shared/Store";
import { fetchInsights } from "../../Shared/Store/insightsSlice";
import { FusionGraph } from "../../Shared/Components/Graph/FusionGraph/FusionGraph";
import { Insight } from "../../Shared/Types";
import { InsightsTooltip } from "./components/InsightsTooltip/InsightsTooltip";
import { formatDate } from "../../Shared/Utils/date";
import { Table } from "../../Shared/Components";
import { Column, createColumnHelper } from "@tanstack/react-table";

export const Insights = () => {
  const dispatch: AppDispatch = useDispatch();
  const [dataDateFrom, setDataDateFrom] = useState("2023-01-01");
  const { insights, loading, error } = useSelector(
    (state: RootState) => state.insights
  );

  useEffect(() => {
    dispatch(fetchInsights(dataDateFrom));
  }, [dataDateFrom, dispatch]);

  const columnHelper = createColumnHelper<Insight>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("created_at", {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("type", {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("severity", {
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <FusionGraph<Insight>
        data={insights.map((item) => ({
          ...item,
          created_at: formatDate(new Date(item.created_at)),
        }))}
        xAxisDataKay="created_at"
        lineDataKey="severityNumber"
        CustomToolTipContent={InsightsTooltip as unknown as ReactElement}
        onFilterChange={(date) => {
          setDataDateFrom(formatDate(date));
        }}
        filterValue={dataDateFrom}
      />
      <Table<Insight>
        title={"Diagonostics"}
        onAdd={() => ""}
        columns={columns}
        data={insights}
      />
    </>
  );
};

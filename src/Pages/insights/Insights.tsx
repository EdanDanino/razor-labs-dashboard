import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FusionGraph, Table } from "../../Shared/Components";
import { AppDispatch, RootState, fetchInsights } from "../../Shared/Store";
import { Insight } from "../../Shared/Types";
import {
  formatDate,
  formatDateToDayMonth,
  formatToDDMMYYY,
} from "../../Shared/Utils/date";
import { InsightDialog, InsightsTooltip } from "./components";

export const Insights = () => {
  const dispatch: AppDispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [dataDateFrom, setDataDateFrom] = useState("2024-06-06 00:00:00");
  const { insights, loading, error } = useSelector(
    (state: RootState) => state.insights
  );

  useEffect(() => {
    dispatch(fetchInsights(dataDateFrom));
  }, [dataDateFrom, dispatch]);

  const columnHelper = createColumnHelper<Insight>();

  const graphData = useMemo(
    () =>
      insights.map((item) => ({
        ...item,
        created_at: formatDateToDayMonth(new Date(item.created_at)),
      })),
    [insights]
  );

  const columns = useMemo(
    () =>
      [
        columnHelper.accessor("created_at", {
          header: () => "Diagonstic date",
          cell: (info) => formatToDDMMYYY(info.getValue()),
        }),
        columnHelper.accessor("type", {
          header: () => "Fault Type",
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("severity", {
          header: () => "Severity",
          cell: (info) => info.getValue(),
        }),
      ] as ColumnDef<Insight, unknown>[],
    [columnHelper]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <FusionGraph<Insight>
        data={graphData}
        xAxisDataKay="created_at"
        lineDataKey="typeNumber"
        CustomToolTipContent={InsightsTooltip as unknown as ReactElement}
        onFilterChange={(date) => {
          setDataDateFrom(formatDate(date));
        }}
        filterValue={dataDateFrom}
      />
      <Table<Insight>
        title={"Diagonostics"}
        onAdd={() => setOpenDialog(true)}
        columns={columns}
        data={insights}
      />
      <InsightDialog open={openDialog} setOpenDialog={setOpenDialog} />
    </>
  );
};

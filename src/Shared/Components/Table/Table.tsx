import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { styled } from "styled-components";

const TablePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TableTopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  margin: 16px 32px 0;
  padding: 8px;
  border-radius: 8px;
  background-color: #e6e8ec;
`;
const THead = styled.thead`
  display: flex;
`;
const TrHeader = styled.tr`
  display: flex;
`;
const Th = styled.th`
  height: 24px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
`;
const Tbody = styled.tbody``;
const TrBody = styled.tr`
  display: flex;
`;
const Td = styled.td`
  height: 56px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 4px;
  padding: 0 16px;
`;

export type TableProps<T> = {
  title: string;
  onAdd: () => void;
  columns: unknown[];
  data: T[];
};

export const Table = <T extends object>({
  onAdd,
  title,
  columns,
  data,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TablePageContainer>
      <TableTopBar>
        <h3>{title}</h3>
        <button onClick={onAdd}>+ Add New</button>
      </TableTopBar>
      <StyledTable>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TrHeader key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </TrHeader>
          ))}
        </THead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <TrBody key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </TrBody>
          ))}
        </Tbody>
      </StyledTable>
    </TablePageContainer>
  );
};

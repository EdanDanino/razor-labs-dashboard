import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { styled } from "styled-components";

const TablePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 ${(props) => props.theme.spacing.large};
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${(props) => props.theme.colors.text};
  }

  button {
    width: 108px;
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.small};
    padding: ${(props) => props.theme.spacing.small};
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.colors.white};
    justify-content: center;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary.default};
    }
  }
`;

const StyledTable = styled.table`
  margin: ${(props) => props.theme.spacing.medium}
    ${(props) => props.theme.spacing.large} 0;
  padding: ${(props) => props.theme.spacing.small};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray};
`;

const THead = styled.thead`
  width: 100%;
  display: flex;
`;

const TrHeader = styled.tr`
  display: flex;
  width: 100%;
  color: ${(props) => props.theme.colors.dark};
`;

const Th = styled.th`
  padding: 0 ${(props) => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #55687d;
`;

const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${(props) => props.theme.spacing.small};
  margin-top: ${(props) => props.theme.spacing.small};
  max-height: 500px;
  overflow: auto;
`;

const TrBody = styled.tr`
  display: flex;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  min-height: 54px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const Td = styled.td`
  padding: 0 ${(props) => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text};
`;

export type TableProps<T> = {
  title: string;
  onAdd: () => void;
  columns: ColumnDef<T, unknown>[];
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
        <button onClick={onAdd}>
          <FontAwesomeIcon icon={faPlus} /> Add New
        </button>
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

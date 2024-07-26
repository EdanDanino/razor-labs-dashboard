import {
  IconDefinition,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useRef } from "react";
import styled from "styled-components";
import { formatDateToDayMonth, formatToDDMMYYY } from "../../../../Utils/date";

const Root = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 8px;
  height: 256px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const GraphItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

const TopBar = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 0 ${({ theme }) => theme.spacing.small};
  gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const FilterButton = styled.button`
  width: 187px;
  height: 32px;
  flex-grow: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: transparent;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export type GraphContainerProps = {
  children: ReactNode;
  title: string;
  Icon: IconDefinition;
  filterValue: string;
  onFilterChange: (date: Date) => void;
};

export const GraphContainer = ({
  children,
  Icon,
  title,
  filterValue,
  onFilterChange,
}: GraphContainerProps) => {
  const pickerRef = useRef<HTMLInputElement>(null);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    onFilterChange(date);
  };

  return (
    <Root>
      <TopBar>
        <TitleContainer>
          <FontAwesomeIcon icon={Icon} /> {title}
        </TitleContainer>
        <Filter>
          <FilterButton
            onClick={() => {
              pickerRef.current?.showPicker();
            }}
          >
            <FontAwesomeIcon icon={faCalendar} />
            From {formatToDDMMYYY(filterValue)}
            <FontAwesomeIcon icon={faChevronDown} />
          </FilterButton>
          <input
            ref={pickerRef}
            data-testid={"graph-container-date-filter"}
            id="date-filter"
            value={filterValue}
            type="date"
            style={{ visibility: "hidden", position: "absolute", top: 0 }}
            onChange={handleFilterChange}
          />
        </Filter>
      </TopBar>
      <GraphItem>{children}</GraphItem>
    </Root>
  );
};

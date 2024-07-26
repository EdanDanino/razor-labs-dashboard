// GraphContainer.test.tsx
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../../Tests/renderWithTheme";
import { formatToDDMMYYY } from "../../../../Utils/date";
import { GraphContainer, GraphContainerProps } from "./GraphContainer";

const mockProps: GraphContainerProps = {
  children: <div>Graph content</div>,
  title: "Sample Graph",
  Icon: faChartLine,
  filterValue: "2023-07-26",
  onFilterChange: vi.fn(),
};

describe("GraphContainer", () => {
  it("renders correctly", () => {
    renderWithTheme(<GraphContainer {...mockProps} />);
    expect(screen.getByText("Sample Graph")).toBeInTheDocument();
    expect(screen.getByText("Graph content")).toBeInTheDocument();
    expect(
      screen.getByText(`From ${formatToDDMMYYY(mockProps.filterValue)}`)
    ).toBeInTheDocument();
  });

  it("calls onFilterChange when date is changed", () => {
    renderWithTheme(<GraphContainer {...mockProps} />);
    const input = screen.getByTestId(/date-filter/i);
    fireEvent.change(input, { target: { value: "2024-07-01" } });
    expect(mockProps.onFilterChange).toHaveBeenCalledWith(
      new Date("2024-07-01")
    );
  });

  it("opens date picker when filter button is clicked", () => {
    renderWithTheme(<GraphContainer {...mockProps} />);
    const button = screen.getByText(
      `From ${formatToDDMMYYY(mockProps.filterValue)}`
    );
    const input = screen.getByTestId(/date-filter/i);

    // Mock showPicker method
    const showPickerMock = vi.fn();
    input.showPicker = showPickerMock;

    fireEvent.click(button);
    expect(showPickerMock).toHaveBeenCalled();
  });

  it("displays the correct title", () => {
    renderWithTheme(<GraphContainer {...mockProps} />);
    expect(screen.getByText("Sample Graph")).toBeInTheDocument();
  });

  it("renders children elements", () => {
    renderWithTheme(<GraphContainer {...mockProps} />);
    expect(screen.getByText("Graph content")).toBeInTheDocument();
  });

  it("displays the correct filter button text", () => {
    renderWithTheme(<GraphContainer {...mockProps} />);
    expect(
      screen.getByText(`From ${formatToDDMMYYY(mockProps.filterValue)}`)
    ).toBeInTheDocument();
  });
});

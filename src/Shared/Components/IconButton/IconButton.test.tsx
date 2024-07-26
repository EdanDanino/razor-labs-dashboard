import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { IconButton, IconButtonProps } from "./IconButton";
import { renderWithTheme } from "../../Tests/renderWithTheme";
import { theme } from "../../Theme";

library.add(faCoffee);

const mockProps: IconButtonProps = {
  id: "button-1",
  icon: faCoffee,
  selected: false,
  onClick: vi.fn(),
};

describe("IconButton", () => {
  it("renders correctly", () => {
    renderWithTheme(<IconButton {...mockProps} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("icon-button-icon")).toBeInTheDocument();
  });

  it("applies selected styles when selected prop is true", () => {
    renderWithTheme(<IconButton {...mockProps} selected={true} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`);
    const icon = screen.getByTestId("icon-button-icon");
    expect(icon).toHaveStyle(`color: ${theme.colors.black}`);
  });

  it("calls onClick with the correct id when clicked", () => {
    renderWithTheme(<IconButton {...mockProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockProps.onClick).toHaveBeenCalledWith(mockProps.id);
  });

  it("changes styles on hover", () => {
    renderWithTheme(<IconButton {...mockProps} />);
    const button = screen.getByRole("button");
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`);
  });
});

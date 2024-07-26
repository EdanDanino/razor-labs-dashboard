import React, { ReactElement, ReactNode, cloneElement } from "react";
import styled from "styled-components";

type FieldProps = {
  label?: string;
  error?: boolean;
  hasValue: boolean;
  isFocused: boolean;
  onFocus: () => void;
  onBlur:
    | React.FocusEventHandler<HTMLInputElement>
    | React.FocusEventHandler<HTMLSelectElement>;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement>
    | React.ChangeEventHandler<HTMLSelectElement>;

  children: ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  position: relative;
  width: 100%;
`;

const Label = styled.label<{ isFocused: boolean; hasValue: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  top: ${({ isFocused, hasValue }) =>
    isFocused || hasValue ? "-24px" : "8px"};
  left: ${({ isFocused, hasValue, theme }) =>
    isFocused || hasValue ? "0px" : theme.spacing.small};
  transition: 0.2s ease all;
  background: ${({ theme, isFocused, hasValue }) =>
    isFocused || hasValue ? "transparent" : theme.colors.light};
  padding: 0 4px;
  pointer-events: none;
  font-size: ${({ isFocused, theme }) =>
    isFocused ? theme.fontSizes.small : theme.fontSizes.medium};
  color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary.default : theme.colors.text};
`;

export const Field = ({
  label,
  error,
  hasValue,
  isFocused,
  onFocus,
  onBlur,
  onChange,
  children,
}: FieldProps) => (
  <Wrapper>
    {cloneElement(children as ReactElement, {
      onFocus,
      onBlur,
      onChange,
      value: hasValue ? (children as ReactElement).props.value : "",
      error,
    })}
    {label && (
      <Label isFocused={isFocused} hasValue={hasValue}>
        {label}
      </Label>
    )}
  </Wrapper>
);

import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Field } from "../Field";

const StyledInput = styled.input<{ error?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.small}`};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.gray)};
  background-color: ${({ theme }) => theme.colors.light};
  outline: none;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.primary.default};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

type InputProps = {
  label?: string;
  error?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const Input: React.FC<InputProps> = ({
  label,
  error,
  value,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleFocus = useCallback(() => setIsFocused(true), []);

  const handleBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>(
    (e) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    },
    []
  );

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setHasValue(e.target.value.length > 0);
      if (onChange) onChange(e);
    },
    [onChange]
  );

  return (
    <Field
      label={label}
      error={error}
      hasValue={hasValue}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    >
      <StyledInput value={value} {...props} />
    </Field>
  );
};

import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Field } from "../Field";

const StyledSelect = styled.select<{ error?: boolean }>`
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

type SelectProps = {
  label?: string;
  error?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  value,
  onChange,
  options,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setHasValue(value ? true : false);
  }, [value]);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <StyledSelect value={value} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Field>
  );
};

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export type IconButtonProps = {
  id: string;
  icon: IconDefinition;
  selected?: boolean;
  onClick?: (id: string) => void;
};

const IconButtonContainer = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.secondary
      : props.theme.colors.primary.default};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    > * {
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

const Icon = styled(FontAwesomeIcon)<{ selected: boolean }>`
  width: 14px;
  height: 16px;
  color: ${(props) =>
    props.selected ? props.theme.colors.black : props.theme.colors.white};
`;

export const IconButton = ({
  icon,
  selected = false,
  onClick,
  id,
  ...rest
}: IconButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <IconButtonContainer selected={selected} onClick={handleClick} {...rest}>
      <Icon icon={icon} selected={selected} data-testid="icon-button-icon" />
    </IconButtonContainer>
  );
};

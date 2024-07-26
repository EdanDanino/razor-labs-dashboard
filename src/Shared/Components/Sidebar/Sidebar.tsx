import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // Example icons
import { useState } from "react";
import styled from "styled-components";
import { Avatar, IconButton, IconButtonProps } from "..";
import { SIDEBAR_WIDTH } from "../shared/consts";

const SidebarContainer = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.colors.primary.default};
  padding: 16px 12px;
  justify-content: space-between;
  align-items: center;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.small};
`;

const LogoutButton = styled(IconButton)`
  &:hover {
    background-color: ${(props) => props.theme.colors.error};
  }
`;

export type SideBarProps = {
  initiallyActiveIndex?: number;
  actionItems: IconButtonProps[];
  onLogOut: () => void;
};

export const SideBar = ({
  initiallyActiveIndex,
  actionItems,
  onLogOut,
}: SideBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    initiallyActiveIndex
  );

  return (
    <SidebarContainer width={SIDEBAR_WIDTH}>
      <ButtonList>
        {actionItems?.map((item, index) => (
          <IconButton
            {...item}
            key={item.id}
            selected={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              item.onClick?.(item.id);
            }}
          />
        ))}
      </ButtonList>
      <ButtonList>
        <LogoutButton
          icon={faRightFromBracket}
          selected={false}
          id="logout"
          onClick={() => onLogOut()}
        />
        <Avatar />
      </ButtonList>
    </SidebarContainer>
  );
};

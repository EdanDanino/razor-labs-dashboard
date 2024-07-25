import { styled } from "styled-components";

type AvatarProps = {
  name?: string;
  onClick?: () => void;
};

const AvatarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary.light};
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

function getInitials(fullName: string): string {
  const nameParts = fullName.split(" ");

  if (nameParts.length < 2) {
    throw new Error(
      "Full name must contain at least a first name and a last name"
    );
  }

  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials;
}

export const Avatar = ({ name = "No Account", onClick }: AvatarProps) => (
  <AvatarButton onClick={onClick}>{getInitials(name)}</AvatarButton>
);

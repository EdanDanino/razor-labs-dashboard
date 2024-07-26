import * as RadixDialog from "@radix-ui/react-dialog";
import { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { styled } from "styled-components";

export type DialogProps = {
  title: string;
  children: ReactNode;
} & Pick<RadixDialogProps, "open" | "onOpenChange">;

const DialogTitle = styled(RadixDialog.Title)`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const DialogOverlay = styled(RadixDialog.Overlay)`
  background-color: ${({ theme }) => theme.colors.overlay};
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const DialogContent = styled(RadixDialog.Content)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  max-height: 85vh;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
export const Dialog = ({ title, children, ...rest }: DialogProps) => (
  <RadixDialog.Root {...rest} modal>
    <RadixDialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {children}
      </DialogContent>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);

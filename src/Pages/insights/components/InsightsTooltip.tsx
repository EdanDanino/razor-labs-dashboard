import styled from "styled-components";
import { NUMBER_TYPES } from "../../../Shared/Constants/inisight-consts";

const TooltipContainer = styled.div`
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.shadow};
  font-size: 14px;
  z-index: 1000;
`;

const TooltipValue = styled.div`
  font-weight: normal;
`;

export type InsightsTooltipProps = {
  payload: unknown[];
};

export const InsightsTooltip = ({ payload }: InsightsTooltipProps) => {
  //@ts-expect-error The Graphs Lib types are sort of bad.
  const value = NUMBER_TYPES[payload[0]?.value];
  return (
    <TooltipContainer>
      <TooltipValue>{value}</TooltipValue>
    </TooltipContainer>
  );
};

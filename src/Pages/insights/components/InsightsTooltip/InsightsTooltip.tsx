import styled from "styled-components";

const TooltipContainer = styled.div`
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.shadow};
  font-size: 14px;
  z-index: 1000;
`;

const TooltipLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const TooltipValue = styled.div`
  font-weight: normal;
`;

export type InsightsTooltipProps = {
  payload: unknown[];
  label: string;
};

export const InsightsTooltip = ({ payload, label }: InsightsTooltipProps) => {
  const severityNumber = { 0: "healthy", 1: "alarm", 2: "critical" };
  //@ts-ignore
  const value = severityNumber[payload[0]?.value];
  return (
    <TooltipContainer>
      <TooltipLabel>{label}</TooltipLabel>
      <TooltipValue>{value}</TooltipValue>
    </TooltipContainer>
  );
};

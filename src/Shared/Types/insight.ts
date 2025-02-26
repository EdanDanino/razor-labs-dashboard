export type Insight = {
  insight_id: string;
  created_at: string;
  type: "bearing" | "gear" | "motor";
  severity: "healthy" | "alarm" | "critical";
  typeNumber: number; //0 | 1 | 2;
};

export const theme = {
  colors: {
    primary: { light: "#7071f3", default: "#2f2f66" },
    secondary: "#12ffe2",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    white: "#fff",
    black: "#000",
    gray: "#e6e8ec",
    shadow: "rgba(2, 29, 61, 0.12)",
  },
  fontSizes: {
    medium: "14px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

export type Theme = typeof theme;

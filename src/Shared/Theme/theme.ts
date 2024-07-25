export const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    white: "#fff",
    black: "#000",
  },
  fontSizes: {
    small: "12px",
    medium: "14px",
    large: "16px",
    xlarge: "18px",
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

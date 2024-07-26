export const theme = {
  colors: {
    primary: { light: "#7071f3", default: "#2f2f66" },
    light: "#f8f9fa",
    dark: "#343a40",
    white: "#fff",
    black: "#000",
    gray: "#e6e8ec",
    shadow: "rgba(2, 29, 61, 0.12)",
    text: "#01152b",
    error: "#dc3545",
  },
  fontSizes: {
    small: "13px",
    medium: "14px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 500,
    bold: 700,
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};

export type Theme = typeof theme;

import { extendTheme } from "@chakra-ui/react";

const themeValues = {
  space: {
    xs: "4px",
    sm: "8px",
    sm2: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
  },
  colors: {
    neutral: {
      0: "#FFFFFF",
      50: "#FCFCFC",
      100: "#E0E0E1",
      200: "#97989B",
      300: "#787A7D",
      400: "#5A5B5E",
      500: "#3E3A40",
      600: "#1E1E1F",
    },
    primary: {
      0: "#FEE5D7",
      100: "#FDD4BC",
      200: "#FAA87A",
      300: "#F99358",
      400: "#F87D37",
      500: "#CF682E",
    },
    danger: {
      0: "#FDE9EC",
      100: "#F7A7B4",
      200: "#EF5069",
      300: "#EB2444",
      400: "#C91330",
      500: "#A30F27",
    },
    warning: {
      0: "#FFF9EE",
      100: "#FFF7E1",
      200: "#FFEAB3",
      300: "#FFDD82",
      400: "#FFC62B",
      500: "#FFAD0D",
    },
    success: {
      0: "#E8F9F0",
      100: "#D1EEE0",
      200: "#47BC84",
      300: "#158E54",
      400: "#177247",
      500: "#0d4027",
    },
    stroke: {
      100: "#E4E4E4",
    },
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Plus Jakarta Sans, sans-serif",
      },
    },
  },
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  textStyles: {
    h1: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    body3: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "bold",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "auto",
      fontWeight: "bold",
    },
  },
};

const theme = extendTheme(themeValues);

export default theme;
export type ThemeType = typeof themeValues;

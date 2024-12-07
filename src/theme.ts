import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"; // Assurez-vous que cela est installé

const theme = extendTheme({
  colors: {
    primary: {
      50: "#ffffff",
      100: "#FDF2ED",
      200: "#FCD9C5",
      300: "#FAB899",
      400: "#F77C36",
      500: "#E5662C",
      600: "#C55324",
      700: "#9B431D",
      800: "#693115",
      900: "#000000",
    },
    secondary: {
      50: "#F9F9F9",
      100: "#EFEFEF",
      200: "#D7D3CE",
      300: "#B8B4B0",
      400: "#8F8B88",
      500: "#757575",
      600: "#55524F",
      700: "#3D3A37",
      800: "#262422",
      900: "#000000",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;

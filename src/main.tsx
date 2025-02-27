import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import theme, { ThemeType } from "./theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>  
      <StyledThemeProvider theme={theme as ThemeType }>
        <App />
      </StyledThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)     
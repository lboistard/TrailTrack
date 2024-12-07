import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "./components/sidebar/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Schedule from "./pages/Schedule";
import SearchBar from "./components/searchbar";

import theme from "./theme";

const BoxContainer = styled(Box)`
  flex: 1;
  padding: ${theme.space.md};
`;

const MainContainer = styled.main`
  padding: ${theme.space.md};
`;


const App: React.FC = ()=> {

  return (
    <Router>
      <SidebarProvider> 
        <Flex>
          <Sidebar />
          <BoxContainer>
            <SearchBar />

            <MainContainer>
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/schedule" element={<Schedule />} />
              </Routes>
            </MainContainer>
          </BoxContainer>
        </Flex>
      </SidebarProvider>
    </Router>
  );
}

export default App;

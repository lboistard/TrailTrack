import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "./components/sidebar/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import SearchBar from "./components/searchbar";

import Notifications from "./pages/Notifications";
import { items, MainMenuItem } from "./components/sidebar/menu/items";
import PageContainer from "./pages/PageContainer";

const BoxContainer = styled(Box)`
  flex: 1;
`;


const App: React.FC = ()=> {

  const location = useLocation();

  useEffect(() => {
    const documentTitle = document.getElementById("page-title");
    const pathname = location.pathname;
    if (documentTitle) {
      const pathElements = pathname.split('/').filter(el => el.length > 0);
      const lastElement = pathElements[pathElements.length - 1];
      documentTitle.title = "FitTrack - " + lastElement.charAt(0).toUpperCase() + lastElement.slice(1);
    }
  }, [location]);

  return (
    <Router>
      <SidebarProvider> 
        <Flex>
          <Sidebar />
          <BoxContainer>
            <SearchBar />

            <main>
              <Routes>
                {items.map((item: MainMenuItem) => (
                  <Route 
                    key={item.path} 
                    path={item.path} 
                    element={<PageContainer>
                      {item.page}
                    </PageContainer>}
                  >
                    <Route path={item.path + "notifications"} element={<Notifications />} />
                  </Route>
                ))}
            
                <Route path="/" element={<Navigate replace to="/dashboard" />} />
            
              </Routes>
            </main>
          </BoxContainer>
        </Flex>
      </SidebarProvider>
    </Router>
  );
}

export default App;

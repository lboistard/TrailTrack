import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import Dashboard from "./pages/dashboard";
import Progress from "./pages/progress";
import Schedule from "./pages/Schedule";

const App: React.FC = ()=> {

  return (
          <Router>
    <SidebarProvider> 
      <Flex>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
      </Flex>
      </SidebarProvider>
    </Router>
  );
}

export default App;

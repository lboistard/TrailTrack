import { useMediaQuery } from "@chakra-ui/react";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type SidebarContextType = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  useEffect(() => {
    setIsCollapsed(isMobile ? true : false);
  }, [isMobile]);
  
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
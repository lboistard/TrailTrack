import React from "react";
import { Divider, Grid } from "@chakra-ui/react";
import { useSidebar } from "../../../context/SidebarContext";

import MenuItem from "./MenuItem";
import { items, manageMenuItems } from "./items";
import { MenuItemsContainer, MenuText } from "./Menu.css";

const Menu: React.FC = () => {
  
  const { isCollapsed } = useSidebar();
  
  return (
    <Grid>
      {/* Main Menu */}
      {isCollapsed ? (
        <Divider mb={4}/>
      ) : (
        <MenuText textStyle={"body3"}>Main Menu</MenuText>
      )}
      <MenuItemsContainer>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </MenuItemsContainer>

      {/* Management Menu */}
      {isCollapsed ? (
        <Divider mb={4}/>
      ) : (
        <MenuText textStyle={"body3"}>Manage</MenuText>
      )}
      <MenuItemsContainer>
        {manageMenuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </MenuItemsContainer>
    </Grid> 
  );
}

export default Menu;
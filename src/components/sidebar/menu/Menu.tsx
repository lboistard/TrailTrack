import React from "react";
import { Divider, Grid } from "@chakra-ui/react";
import { useSidebar } from "../../../context/SidebarContext";

import MenuItem from "./MenuItem";
import { items } from "./items";
import { MenuItemsContainer, MenuText } from "./Menu.css";

const Menu: React.FC = () => {
  
  const { isCollapsed } = useSidebar();
  
  return (
    <Grid>
      {isCollapsed ? (
        <Divider mb={4}/>
      ) : (
        <MenuText variant={"body3"}>Main Menu</MenuText>
      )}
      <MenuItemsContainer>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </MenuItemsContainer>
    </Grid> 
  );
}

export default Menu;
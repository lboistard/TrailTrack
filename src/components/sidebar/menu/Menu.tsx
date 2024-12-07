import React from "react";
import {Box, Divider, Grid, Text } from "@chakra-ui/react";
import { useSidebar } from "../../../context/SidebarContext";

import MenuItem from "./MenuItem";
import { items } from "./items";

const Menu: React.FC = () => {
  
  const { isCollapsed } = useSidebar();
  
  return (
    <Grid>
      {isCollapsed ? <Divider mb={4}/>: <Text color={"secondary.500"} fontWeight={600} fontSize={"md"} mb={4}>Main menu</Text> }
    <Box w="100%">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </Box>
      </Grid>
  );
}

export default Menu;
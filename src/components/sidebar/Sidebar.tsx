import { Box, Grid, GridItem, Flex, Image, IconButton } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import Menu from "./menu/Menu";
import {  IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";
import { useSidebar } from "../../context/SidebarContext";

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleCollapse } = useSidebar();

  return (
    <Box
      w={isCollapsed ? "72px" : "25%"}
      bg="secondary.50"
      minH="100vh"
      transition="width 0.3s linear"
     
      p={4}
    >
      {/* Header */}
      <Grid  marginBottom={8} templateColumns="repeat(2, 1fr)" >
        {!isCollapsed && (
          <Flex justifyContent={"start"} alignItems={"center"}>
            <Box>
              <Image src={Logo} alt="Logo" height={"34px"} />
            </Box>
            <Box fontWeight={600} fontSize={"xl"} color="secondary.600" pl={4}>
              FitTrack
              </Box>
          </Flex>
        )}
        <Grid justifyContent="end">
          <GridItem colSpan={1}>
            <IconButton 
              aria-label="Logo" 
              bg="primary.50" 
              border={"1px solid"} 
              borderColor="secondary.200" 
              borderRadius={"full"} 
              p={2} 
              _hover={{ bg: "secondary.50" }}
              onClick={toggleCollapse}
            >
              {isCollapsed ? <IoChevronForwardOutline/> : <IoChevronBackOutline/>}
            </IconButton>
          </GridItem>
        </Grid>
      </Grid>
      {/* Menu */}
      <Menu />
    </Box>
  );
}

export default Sidebar;
import React from "react";
import { Flex, useTheme } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import ProfileMenu from "./ProfileMenu";
import MessageIcon from "../../assets/icons/Message.svg";
import NotificationIcon from "../../assets/icons/Notification.svg";
import { IconButtonActions, SearchBarContainer, VerticalDivider } from "./SearchBar.css";

const SearchBar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const handleNotificationClick = () => {
    const currentPath = location.pathname;
    if (!currentPath.endsWith("/notifications")) {
      navigate(`${currentPath}/notifications`);
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput />

      <Flex align="center">
        <IconButtonActions aria-label="Search database">
          <MessageIcon color={theme.colors.neutral[600]} />
        </IconButtonActions>
        <IconButtonActions 
          aria-label="Search database" 
          onClick={handleNotificationClick}
        >
          <NotificationIcon color={theme.colors.neutral[600]} />
        </IconButtonActions>
        <VerticalDivider />
        <ProfileMenu />
      </Flex>
    </SearchBarContainer>
  );
};

export default SearchBar;
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { MenuIconButton } from "./SearchBar.css";

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton as={MenuIconButton} variant="ghost">
        <Avatar size="sm"/>
      </MenuButton>
      <MenuList>
        <MenuItem>Voir le Profil</MenuItem>
        <MenuItem>Se Déconnecter</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@chakra-ui/react";

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} variant="ghost">
        <Avatar size="sm" />
      </MenuButton>
      <MenuList>
        <MenuItem>Voir le Profil</MenuItem>
        <MenuItem>Se Déconnecter</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
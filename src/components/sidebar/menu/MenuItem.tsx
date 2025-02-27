import React from "react";
import { useTheme } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { MenuItemFlex, MenuItemTitle } from "./Menu.css";
import { useSidebar } from "../../../context/SidebarContext";

import type { MenuItem } from "./items";

type Props = {
	item: MenuItem
}

const MenuItem: React.FC<Props> = ({ item }) => {
	const theme = useTheme();
	const navigate = useNavigate(); 

	const { isCollapsed } = useSidebar();
	const location = useLocation();
	const isActive = location.pathname.includes(item.path);
	
	return (
		<MenuItemFlex isActive={isActive} onClick={() => navigate(item.path)}>
			{item.icon(isActive && theme.colors.neutral[0])}
			{
				!isCollapsed && (
				<MenuItemTitle isActive={isActive} textStyle={isActive ? "body3" : "body2"}>{item.title}</MenuItemTitle>
				)
			}
		</MenuItemFlex>
	);
}

export default MenuItem;
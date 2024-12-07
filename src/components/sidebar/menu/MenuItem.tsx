import React from "react";
import { useSidebar } from "../../../context/SidebarContext";
import { useLocation } from "react-router-dom";
import { MenuItemFlex, MenuItemTitle } from "./Menu.css";

import type { MenuItem } from "./items";

type Props = {
	item: MenuItem
}

const MenuItem: React.FC<Props> = ({ item }) => {
	
	const { isCollapsed } = useSidebar();
	const location = useLocation();
	const isActive = location.pathname === item.path;
	
	return (
		<MenuItemFlex isActive={isActive}>
			{item.icon(isActive ? "#FFFFFF" : "#000000")}
			{
				!isCollapsed && (
				<MenuItemTitle isActive={isActive} variant="body3">{item.title}</MenuItemTitle>
				)
			}
		</MenuItemFlex>
	);
}

export default MenuItem;
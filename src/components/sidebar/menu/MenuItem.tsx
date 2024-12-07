import React from "react";
import { Link } from "react-router-dom";
import {Flex, Text } from "@chakra-ui/react";
import type { MenuItem } from "./items";
import { useSidebar } from "../../../context/SidebarContext";
import { useLocation } from "react-router-dom";

type Props = {
	item: MenuItem
}

const MenuItem: React.FC<Props> = ({ item }) => {
	
	const { isCollapsed } = useSidebar();
	const location = useLocation();
	const isActive = location.pathname === item.path;
	
	return (
		<Flex
			as={Link} to={`/${item.path}`}
			align="center"
			p={2}
			my={1}
			borderRadius="2xl"
			color={isActive ? "white" : "gray.500"}
			bg={isActive ? "primary.400" : "transparent"}
			_hover={{ bg: "primary.500", color: "white" }}
			cursor="pointer"
			justifyContent={isCollapsed ? "center" : "flex-start"}
		>
		<Text fontSize="lg" mr={isCollapsed ? 0 : 3}>
			{item.icon}
		</Text>
		{
			!isCollapsed && (
				<Text>{item.title}</Text>
			)
		}
		</Flex>
	);
}

export default MenuItem;
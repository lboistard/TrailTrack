import styled from "styled-components";
import { Text, Box, Flex } from "@chakra-ui/react";

export const MenuText = styled(Text)`
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin: ${({ theme }) => theme.space.sm};
`;

export const MenuItemsContainer = styled(Box)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const MenuItemFlex = styled(Flex)<{ isActive: boolean }>`
  width: 100%;
  align-items: center;
  border-radius: 100px;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.sm2}`};
  margin: ${({ theme }) => theme.space.sm} 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, isActive }) =>
      !isActive && theme.colors.neutral[100]};
  }

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary[400] : "transparent"};
`;

export const MenuItemTitle = styled(Text)<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral[0] : theme.colors.neutral[300]};
  margin-left: ${({ theme }) => theme.space.sm};
`;

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";

export const SidebarBox = styled(Box)<{ isCollapsed: boolean }>`
  width: ${({ isCollapsed }) => (isCollapsed ? "72px" : "270px")};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border-right: 1px solid ${({ theme }) => theme.colors.stroke[100]};
  min-height: 100vh;
  transition: width 0.7s;
  padding: ${({ theme }) => `${theme.space.lg} ${theme.space.md}`};
`;

export const HeaderContainer = styled(Flex)`
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const LogoText = styled(Box)`
  color: ${({ theme }) => theme.colors.neutral[600]};
  padding-left: ${({ theme }) => theme.space.sm};
`;

export const ImageContainer = styled(Box)`
  height: 40px;
  width: 40px;
`;

export const LogoImageContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  transition: visibility 0.7s;
`;

export const CloseIconContainer = styled(Grid)`
  justify-content: end;
`;

export const CloseIconGridItem = styled(GridItem)`
  col-span: 1;
`;

export const CloseIcon = styled(Box)`
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: 1px solid ${({ theme }) => theme.colors.stroke[100]};
  border-radius: 50%;
  padding: ${({ theme }) => theme.space.sm};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    cursor: pointer;
  }
`;

import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const SearchBarContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: ${({ theme }) => theme.space.md};
`;

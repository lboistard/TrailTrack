import {
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import styled from "styled-components";

export const SearchBarContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.stroke[100]};
  border-left: none;
  padding: ${({ theme }) => `${theme.space.lg} ${theme.space.xl}`};
  height: ${({ theme }) => theme.space["6xl"]};
`;

export const InputContainer = styled(InputGroup)`
  flex: 1;
  height: ${({ theme }) => theme.space["3xl"]};
  & > div,
  input {
    height: ${({ theme }) => theme.space["3xl"]};
  }
`;

export const InputStartIcon = styled(InputLeftElement)`
  color: ${({ theme }) => theme.colors.neutral[200]};
  padding: ${({ theme }) =>
    `${theme.space.sm3} 0px ${theme.space.sm3} ${theme.space.md}`};
  & > svg {
    height: ${({ theme }) => theme.space["lg2"]};
    width: ${({ theme }) => theme.space["lg2"]};
  }
`;

export const InputField = styled(Input)`
  width: 480px !important;
  border-radius: 999px !important;
  border-color: ${({ theme }) => theme.colors.stroke[100]} !important;
  padding-left: ${({ theme }) => theme.space["3xl"]} !important;
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[200]} !important;
  }
`;

export const IconButtonActions = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.neutral[0]} !important;
  border: 1px solid ${({ theme }) => theme.colors.stroke[100]} !important;
  border-radius: 50% !important;
  padding: ${({ theme }) => theme.space.sm} !important;
  margin-right: ${({ theme }) => theme.space.sm} !important;
  height: 40px !important;
  width: 40px !important;
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[50]} !important;
  }
`;

export const VerticalDivider = styled(Divider)`
  height: 34px !important;
  width: 2px !important;
  margin: 0 ${({ theme }) => theme.space.md} !important;
  background-color: ${({ theme }) => theme.colors.stroke[100]} !important;
`;

export const MenuIconButton = styled(IconButton)`
  border-radius: 50% !important;
  padding: 0 !important;
  height: 40px !important;
  width: 40px !important;
  margin-right: ${({ theme }) => theme.space.sm} !important;
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[50]} !important;
  }
  & span {
    padding: 0 !important;
    height: 40px !important;
    width: 40px !important;
  }
`;

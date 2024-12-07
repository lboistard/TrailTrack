import React from "react";
import { Flex } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ProfileMenu from "./ProfileMenu";

const SearchBar: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      bg="gray.100"
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <SearchInput />

      <Flex align="center" gap={4}>
        <ProfileMenu />
      </Flex>
    </Flex>
  );
};

export default SearchBar;
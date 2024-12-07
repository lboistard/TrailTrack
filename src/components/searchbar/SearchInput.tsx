import React from "react";
import { Input } from "@chakra-ui/react";

const SearchInput: React.FC = () => {
  return (
    <Input
      placeholder="Search..."
      size="md"
      maxW="400px"
      borderRadius="full"
    />
  );
};

export default SearchInput;
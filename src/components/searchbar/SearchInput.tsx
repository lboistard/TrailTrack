import React from "react";
import { useTheme } from "@chakra-ui/react";
import SearchIcon from "../../assets/icons/Search.svg";
import { InputContainer, InputField, InputStartIcon } from "./SearchBar.css";

const SearchInput: React.FC = () => {
  const theme = useTheme();

  return (
    <InputContainer>
      <InputStartIcon>
        <SearchIcon color={theme.colors.neutral[200]} />
      </InputStartIcon>
      <InputField placeholder="Search" textStyle="body2" />
    </InputContainer>
  );
};

export default SearchInput;
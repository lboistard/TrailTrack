
import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface SearchIconProps {
  color: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3354 7.97855C21.1948 10.838 21.1948 15.474 18.3354 18.3334C15.476 21.1928 10.8399 21.1928 7.9805 18.3334C5.12108 15.474 5.12108 10.838 7.9805 7.97855C10.8399 5.11913 15.476 5.11913 18.3354 7.97855" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.1665 22.1665L18.3281 18.3281" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SearchIcon;

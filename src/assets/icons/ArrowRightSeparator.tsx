
import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface ArrowRightSeparatorProps {
  color: string;
}

    const ArrowRightSeparator: React.FC<ArrowRightSeparatorProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16L14 12L10 8" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


    )
}

export default ArrowRightSeparator;
import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface MessageIconProps {
  color: string;
}

const MessageIcon: React.FC<MessageIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.1382 19.5657C11.0129 22.0587 16.1439 21.2294 19.0359 17.6426C21.9279 14.0558 21.6504 8.86566 18.3924 5.60769C15.1344 2.34972 9.94429 2.07222 6.3575 4.96421C2.77071 7.85621 1.94136 12.9872 4.4344 16.8619" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.43374 16.8613L4.00684 19.4165C3.98022 19.5758 4.03222 19.7382 4.14645 19.8525C4.26068 19.9667 4.42306 20.0187 4.5824 19.9921L7.1374 19.5651" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.995 12L15 11.995L15.005 12L15 12.005L14.995 12" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.995 12L12 11.995L12.005 12L12 12.005L11.995 12" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.995 12L9 11.995L9.005 12L9 12.005L8.995 12" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}

export default MessageIcon;
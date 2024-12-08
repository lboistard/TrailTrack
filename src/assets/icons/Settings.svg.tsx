
import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface SettingsIconProps {
  color: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5.5H6.07" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3225 3.73223C11.2988 4.70854 11.2988 6.29145 10.3225 7.26776C9.34614 8.24407 7.76323 8.24407 6.78692 7.26776C5.81061 6.29145 5.81061 4.70854 6.78692 3.73223C7.76323 2.75592 9.34614 2.75592 10.3225 3.73223" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.0625 5.5H21.0025" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3225 3.73223C11.2988 4.70854 11.2988 6.29145 10.3225 7.26776C9.34614 8.24407 7.76323 8.24407 6.78692 7.26776C5.81061 6.29145 5.81061 4.70854 6.78692 3.73223C7.76323 2.75592 9.34614 2.75592 10.3225 3.73223" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.9975 12H17.9375" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.94 12H3" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.2131 10.2322C18.1894 11.2085 18.1894 12.7915 17.2131 13.7678C16.2368 14.7441 14.6539 14.7441 13.6775 13.7678C12.7012 12.7915 12.7012 11.2085 13.6775 10.2322C14.6539 9.25592 16.2368 9.25592 17.2131 10.2322" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.0625 18.5H21.0025" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18.5H6.06" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.3225 16.7322C11.2988 17.7085 11.2988 19.2915 10.3225 20.2678C9.34614 21.2441 7.76323 21.2441 6.78692 20.2678C5.81061 19.2915 5.81061 17.7085 6.78692 16.7322C7.76323 15.7559 9.34614 15.7559 10.3225 16.7322" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}

export default SettingsIcon;
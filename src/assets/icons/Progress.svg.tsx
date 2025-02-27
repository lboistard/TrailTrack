import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface ProgressIconProps {
  color: string;
}

const ProgressIcon: React.FC<ProgressIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 10.9992V4.00659C12 3.71932 12.1227 3.44575 12.3373 3.25474C12.5519 3.06374 12.8378 2.97351 13.1232 3.00678C17.2371 3.52179 20.4773 6.76207 20.9924 10.876C21.0256 11.1613 20.9354 11.4473 20.7444 11.6618C20.5534 11.8764 20.2798 11.9991 19.9925 11.9991H13C12.4477 11.9991 12 11.5514 12 10.9992Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.00043 4.75977C4.55582 6.31503 2.55267 9.95869 3.08519 13.7004C3.6177 17.4422 6.55784 20.3823 10.2996 20.9148C14.0413 21.4473 17.685 19.4442 19.2402 15.9996" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default ProgressIcon;
import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface ScheduleIconProps {
  color: string;
}

const ScheduleIcon: React.FC<ScheduleIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 3V6" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 3V6" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="3" y="4.5" width="18" height="16.5" rx="3" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11.5H17" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15.5H17" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 11.5H8" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15.5H8" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default ScheduleIcon;

import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface CommunityIconProps {
  color: string;
}

const CommunityIcon: React.FC<CommunityIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.99145" cy="8.50708" r="3.49145" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="17.001" cy="9.49714" r="2.50104" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.99219 20.0021V18.9847C1.99219 16.7837 3.77593 15 5.97685 15H10.0125C12.2134 15 13.9972 16.7837 13.9972 18.9847V20.0021" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 15H18.1025C20.3034 15 22.0871 16.7837 22.0871 18.9847V20.0021" stroke={strokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}

export default CommunityIcon;
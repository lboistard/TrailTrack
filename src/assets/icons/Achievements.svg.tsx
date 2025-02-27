
import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface AchievementsIconProps {
  color: string;
}

    const AchievementsIcon: React.FC<AchievementsIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="14.5" r="6.5" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="14.5" r="2.5" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.4141 8.0113L15.6234 3.42654C15.8105 3.15922 16.1163 3.00001 16.4426 3H20.0013C20.3742 3 20.7161 3.20746 20.8883 3.53819C21.0605 3.86893 21.0344 4.268 20.8206 4.57347L16.8799 10.2029" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5873 8.0113L8.37798 3.42654C8.19085 3.15921 7.88506 3 7.55875 3H4.00001C3.62713 3 3.28522 3.20746 3.11302 3.53819C2.94083 3.86893 2.96694 4.268 3.18078 4.57347L7.12142 10.2029" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default AchievementsIcon;
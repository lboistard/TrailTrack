import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface NotificationIconProps {
  color: string;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50781 18.002V18.5142C9.50781 19.1746 9.77032 19.808 10.2375 20.2749C10.7048 20.7417 11.3384 21.0037 11.9989 21.0032V21.0032C12.6594 21.0035 13.293 20.7412 13.7602 20.2742C14.2274 19.8072 14.4899 19.1737 14.4899 18.5132V18.002" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17.945 18.0023C19.0793 18.0023 19.9989 17.0828 19.9989 15.9485V15.9485C19.9984 15.3723 19.7696 14.8197 19.3626 14.4118L17.998 13.0483V8.99859C17.998 5.6835 15.3106 2.99609 11.9955 2.99609V2.99609C8.68043 2.99609 5.99302 5.6835 5.99302 8.99859V13.0483L4.62845 14.4118C4.22144 14.8197 3.99265 15.3723 3.99219 15.9485V15.9485C3.99219 16.4932 4.20858 17.0156 4.59375 17.4008C4.97892 17.786 5.50133 18.0023 6.04604 18.0023H17.945Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export default NotificationIcon;
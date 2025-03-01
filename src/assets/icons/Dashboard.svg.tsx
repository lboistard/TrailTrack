import React from 'react';
import { useTheme } from '@chakra-ui/react';

interface DashboardIconProps {
  color?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ color }) => {
  const theme = useTheme();
  const strokeColor = color || theme.colors.neutral[300]; 

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.75 9.75H5C3.895 9.75 3 8.855 3 7.75V5C3 3.895 3.895 3 5 3H7.75C8.855 3 9.75 3.895 9.75 5V7.75C9.75 8.855 8.855 9.75 7.75 9.75Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 9.75H16.25C15.145 9.75 14.25 8.855 14.25 7.75V5C14.25 3.895 15.145 3 16.25 3H19C20.105 3 21 3.895 21 5V7.75C21 8.855 20.105 9.75 19 9.75Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.75 21H5C3.895 21 3 20.105 3 19V16.25C3 15.145 3.895 14.25 5 14.25H7.75C8.855 14.25 9.75 15.145 9.75 16.25V19C9.75 20.105 8.855 21 7.75 21Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 21H16.25C15.145 21 14.25 20.105 14.25 19V16.25C14.25 15.145 15.145 14.25 16.25 14.25H19C20.105 14.25 21 15.145 21 16.25V19C21 20.105 20.105 21 19 21Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default DashboardIcon;
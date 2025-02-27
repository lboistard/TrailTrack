
import { useTheme } from '@chakra-ui/react/system';
import React from 'react';

interface WorkoutPlanIconProps {
  color: string;
}

const WorkoutPlanIcon: React.FC<WorkoutPlanIconProps> = ({ color }) => {

    const theme = useTheme();
    const strokeColor = color || theme.colors.neutral[300]; 

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.90615 7.34267H11.996L13.6247 6.35025C13.8849 6.19175 14.2031 6.16045 14.4892 6.26523C14.7753 6.37 14.998 6.59943 15.0943 6.88848L17.3983 13.8004L20.6396 18.1222C21.0489 18.6678 21.1147 19.3979 20.8097 20.0079C20.5046 20.618 19.8811 21.0034 19.199 21.0034H15.2674C14.1556 21.004 13.0938 20.5415 12.3372 19.7268L3.79261 10.53C3.2377 9.9315 2.95047 9.13283 2.99709 8.31801C3.04371 7.50319 3.42017 6.74249 4.03971 6.21119L7.46414 3.27697C7.80795 2.98246 8.29173 2.91498 8.70301 3.10417C9.1143 3.29337 9.37785 3.70463 9.37793 4.15734V7.34267H11.996" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.99219 17.5022H4.99302" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99427 21.0022H2.99219" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.5475 18.0017H15.5214C14.6886 18.004 13.8928 17.658 13.3265 17.0473L3.64844 6.625" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 13.0005L16.9066 12.3242" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 10.4983L16.0657 9.79505" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export default WorkoutPlanIcon;
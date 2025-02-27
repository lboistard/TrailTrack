import { Box, Step, useTheme } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import ArrowRightSeparator from "../../assets/icons/ArrowRightSeparator";
import { NavigationContainer, StepText } from "./Navigation.css";
import { useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const theme = useTheme();
  const location = useLocation(); 
  
  const [lastSegment, setLastSegment] = useState<string>(""); 
  const [ segments, setSegments ] = useState<string[]>([])

  useEffect(() => {
    console.log(location)
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    setSegments(pathSegments)
    setLastSegment(pathSegments[pathSegments.length - 1] || "");
  }, [location])

  return (
    <NavigationContainer index={0}>
      <Step key={0}>

        <Box>
          <StepText isActive={false}>Main Menu</StepText>
        </Box>

        <ArrowRightSeparator color={theme.colors.stroke["400"]} />
      </Step>
      {segments.map((step, index) => (
        <Step key={index}>
          <Box>
            <StepText isActive={lastSegment === `${step}`}>{step.charAt(0).toUpperCase() + step.slice(1)}</StepText>
          </Box>

          {index < segments.length - 1 && (
            <ArrowRightSeparator color={theme.colors.stroke["400"]} />
          )}
        </Step>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;  
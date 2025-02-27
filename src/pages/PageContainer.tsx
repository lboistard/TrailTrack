import { styled } from "styled-components";
import { Grid } from "@chakra-ui/react";
import React from "react";
import Navigation from "../components/navigation/Navigation";

const Container = styled(Grid)`
    width: 100%;
    height: 100%;
    padding: ${({theme}) => theme.space.xl};
`

type Props = {
    children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default PageContainer;
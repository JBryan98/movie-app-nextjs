import { Container, ContainerProps } from "@mui/material";
import React from "react";

interface Props extends ContainerProps {
  children: React.ReactNode;
}

const AppContainer = ({ children, ...rest }: Props) => {
  return (
    <Container maxWidth="xl" {...rest}>
      {children}
    </Container>
  );
};

export default AppContainer;

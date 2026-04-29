import React from "react";
import AppContainer from "./AppContainer";
import { Grid } from "@mui/material";

const ErrorContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContainer sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid display="flex" flexDirection="column" alignItems="center">
          {children}
        </Grid>
      </Grid>
    </AppContainer>
  );
};

export default ErrorContainer;

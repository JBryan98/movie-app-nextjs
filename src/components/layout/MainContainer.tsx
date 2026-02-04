import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../navigation/Sidebar";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const SIDEBAR_WIDTH = 120;
  return (
    <Box component="main">
      <Sidebar width={SIDEBAR_WIDTH} />
      <Box
        marginLeft={{ xs: 0, md: `${SIDEBAR_WIDTH}px` }}
        // margin for the bottom bar on mobile
        marginBottom={{ xs: "72px", md: 0 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainContainer;

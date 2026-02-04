"use client";

import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Drawer, List, Stack, useMediaQuery } from "@mui/material";

import BottomBar from "./BottomBar";
import { navigationItems } from "./NavigationItem";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ width }: { width: number }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  if (!matches) return <BottomBar />;
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: "flex",
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          background: "black",
        },
      }}
    >
      <Stack height="68px" alignItems="center" justifyContent="center">
        <LiveTvIcon fontSize="large" />
      </Stack>
      <List sx={{ flexGrow: 1 }}>
        {navigationItems.map((item) => (
          <SidebarItem key={item.href} item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationItems } from "./NavigationItem";

const BottomBar = () => {
  const pathname = usePathname();
  const [value, setValue] = useState(pathname);

  useEffect(() => {
    const mainPath = pathname.split("/")[1];
    setValue(`/${mainPath}`);
  }, [pathname]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ background: "black" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navigationItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.title}
            icon={<item.icon />}
            LinkComponent={Link}
            value={item.href}
            href={item.href}
          ></BottomNavigationAction>
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;

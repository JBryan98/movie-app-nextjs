"use client";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "./NavigationItem";

interface Props {
  item: NavigationItem;
}

const SidebarItem = ({ item }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);
  return (
    <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        LinkComponent={Link}
        href={item.href}
      >
        <ListItemIcon
          sx={{
            textAlign: "center",
            display: "block",
            color: isActive ? "primary.main" : "inherit",
          }}
        >
          <item.icon />
        </ListItemIcon>
        <Typography
          variant="overline"
          textAlign="center"
          sx={{ color: isActive ? "primary.main" : "inherit" }}
        >
          {item.title}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;

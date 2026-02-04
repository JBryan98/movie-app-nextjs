"use client";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Drawer } from "@mui/material";
import React, { Fragment, useState } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const SidebarFilter = ({ title, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<FilterAltIcon />}
        sx={{
          height: "100%",
          width: {
            xs: "100%",
            md: "auto",
          },
        }}
      >
        Filtrar
      </Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        {children}
      </Drawer>
    </Fragment>
  );
};

export default SidebarFilter;

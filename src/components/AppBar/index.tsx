import React, { FC } from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "../Drawer";

export interface AppBarProps {
  title?: string;
  icon?: any;
}

const AppBar: FC<AppBarProps> = ({ title = "", icon }) => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

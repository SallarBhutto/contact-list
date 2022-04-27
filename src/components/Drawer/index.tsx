import React, { FC } from "react";
import {
  Drawer as MuiDrawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  Box,
} from "@mui/material";
import logo from "../../assests/images/inventorum_logo.png";
import { Link as RouterLink } from "react-router-dom";
import defaultDrawerItems from "./drawerItems";
import styled from "styled-components";

export const drawerWidth = 240;

const Drawer: FC = () => {
  return (
    <MuiDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          height: 65,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="logo" style={{ width: 120 }} />
      </Box>
      <List>
        {defaultDrawerItems.map(({ displayName, route, Icon }) => (
          <Link key={`${displayName}-${Math.random()}`} to={route}>
            <ListItem button key={displayName}>
              <ListItemIcon>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText secondary={displayName} />
            </ListItem>
          </Link>
        ))}
      </List>
    </MuiDrawer>
  );
};

const Link = styled(RouterLink)`
  text-decoration: none;
`;

export default Drawer;

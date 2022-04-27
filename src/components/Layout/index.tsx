import React, { FC, ReactNode } from "react";
import { Box, CssBaseline, Container } from "@mui/material";
import styled from "@mui/styled-engine";
import Drawer from "../Drawer";
import AppBar from "../AppBar";

export interface LayoutProps {
  children: ReactNode;
  variant?: "default"; //can add more variants in future for different users/roles/apps
}
const Layout: FC<LayoutProps> = ({ variant = "default", children }) => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "grey" }}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <Container
        style={{
          marginTop: 80,
          paddingLeft: 0,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;

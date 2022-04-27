import React, { FC, ReactNode } from "react";
import { Box, CssBaseline, Container } from "@mui/material";
import styled from "styled-components";
import Drawer from "../Drawer";
import AppBar from "../AppBar";

export interface LayoutProps {
  children: ReactNode;
  variant?: "default"; //can add more variants in future for different users/roles/apps
}
const Layout: FC<LayoutProps> = ({ variant = "default", children }) => {
  return (
    <Box component="div" sx={{ display: "flex", backgroundColor: "grey" }}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <ContentContainer
        style={{
          marginTop: 80,
          paddingLeft: 0,
        }}
      >
        {children}
      </ContentContainer>
    </Box>
  );
};

const ContentContainer = styled(Container)`
  margin-top: 80;
  padding-left: 0;
`;

export default Layout;

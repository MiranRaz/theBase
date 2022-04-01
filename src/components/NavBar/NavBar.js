import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { styled } from "@mui/material/styles";

import { AppBar, Container, Divider, IconButton, Toolbar } from "@mui/material";

import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AdjustIcon from "@mui/icons-material/Adjust";

const drawerWidth = 270;

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: 1,
  // necessary for content to be below app bar
  justifyContent: "flex-start",
}));

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toTop = () => {
    window.scroll(0, 0);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#2e2f32",
      }}
    >
      <Toolbar disableGutters>
        <Container max-width="md">
          <div className="inner-content">
            <div className="brand">
              <div className="header-logo-box">
                <NavLink
                  to="/theBase/"
                  onClick={() => {
                    handleDrawerClose();
                    toTop();
                  }}
                >
                  <AdjustIcon style={{ fontSize: 55 }} />
                </NavLink>
              </div>
            </div>
            <Hidden lgDown>
              <ul className="nav-links">
                <li>
                  <NavLink
                    to="/theBase/"
                    onClick={() => {
                      handleDrawerClose();
                      toTop();
                    }}
                  >
                    <h3>Movies</h3>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/theBase/tvseries"
                    onClick={() => {
                      handleDrawerClose();
                      toTop();
                    }}
                  >
                    Tv Series
                  </NavLink>
                </li>
              </ul>
            </Hidden>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon style={{ fontSize: "40px" }} />
              </IconButton>
            </Hidden>
          </div>
        </Container>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2e2f32",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon
              sx={{
                fontSize: "50px",
                color: "#af3c3a",
              }}
            />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <>
          <div className="under-heading">
            <NavLink
              to="/theBase/"
              style={{ margin: "20px", fontSize: "30px" }}
              onClick={() => {
                handleDrawerClose();
                toTop();
              }}
            >
              Movies
            </NavLink>
          </div>
          <Divider />
          <div className="under-heading">
            <NavLink
              to="/theBase/tvseries"
              style={{ margin: "20px", fontSize: "30px" }}
              onClick={() => {
                handleDrawerClose();
                toTop();
              }}
            >
              Tv Series
            </NavLink>
          </div>
        </>
      </Drawer>
    </AppBar>
  );
}

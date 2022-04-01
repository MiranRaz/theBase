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
              <NavLink
                to="/"
                activeClassName="active"
                onClick={handleDrawerClose}
              >
                <AdjustIcon style={{ fontSize: 55 }} />
              </NavLink>
            </div>
            <Hidden lgDown>
              <ul className="nav-links">
                <li>
                  <NavLink to="/" onClick={handleDrawerClose}>
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tvseries" onClick={handleDrawerClose}>
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
            backgroundColor: "#af3c3a",
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
              }}
            />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <>
          <div className="under-heading">
            <NavLink
              to="/"
              style={{ margin: "20px", fontSize: "30px" }}
              onClick={handleDrawerClose}
            >
              Movies
            </NavLink>
          </div>
          <Divider />
          <div className="under-heading">
            <NavLink
              to="/tvseries"
              style={{ margin: "20px", fontSize: "30px" }}
              onClick={handleDrawerClose}
            >
              Tv Series
            </NavLink>
          </div>
        </>
      </Drawer>
    </AppBar>
  );
}

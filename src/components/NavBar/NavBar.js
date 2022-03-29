import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";

import { AppBar, Container, Divider, IconButton, Toolbar } from "@mui/material";
import Hidden from "@mui/material/Hidden";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/material/Drawer";

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
    <AppBar style={{ backgroundColor: "#032541" }}>
      <Toolbar disableGutters>
        <Container max-width="md">
          <div className="inner-content">
            <div className="brand">
              <Link to="/" onClick={handleDrawerClose}>
                theBase
              </Link>
            </div>
            <Hidden lgDown>
              <ul className="nav-links">
                <li>
                  <Link to="/" onClick={handleDrawerClose}>
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/tvseries" onClick={handleDrawerClose}>
                    Tv Series
                  </Link>
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
            <Link
              to="/"
              style={{ color: "black", margin: "20px", fontSize: "30px" }}
              onClick={handleDrawerClose}
            >
              Movies
            </Link>
          </div>
          <Divider />
          <div className="under-heading">
            <Link
              to="/tvseries"
              style={{ color: "black", margin: "20px", fontSize: "30px" }}
              onClick={handleDrawerClose}
            >
              Tv Series
            </Link>
          </div>
        </>
      </Drawer>
    </AppBar>
  );
}

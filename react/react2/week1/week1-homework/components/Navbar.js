"use client";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:740px)");

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const navLinkItems = [
    { name: "Astronomy Photo", url: "/astronomy" },
    { name: "Rover Photo", url: "/rover" },
    { name: "Blog", url: "/blog" },
    { name: "Epic Image", url: "/epic" },
    { name: "Sign In", url: "/signin" },
  ];

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
        {navLinkItems.map((item) => (
          <ListItem button key={item.name} onClick={handleDrawerToggle}>
            <Link href={item.url} passHref>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ReactApp
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          navLinkItems.map((link) => (
            <Link href={link.url} passHref key={link.name}>
              <Button color="inherit">{link.name}</Button>
            </Link>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

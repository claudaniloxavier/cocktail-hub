"use client";
import { useState } from "react";

import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@/components/commons/Icons/Person";
import ShoppingCartIcon from "@/components/commons/Icons/ShoppingCart";
import Logo from "@/components/commons/Logo";

import { MENU_ITEMS } from "./constants";

import Styled from "./styles";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Styled.AppBar position="sticky" elevation={0}>
        <Styled.Toolbar>
          <Logo color="text.secondary" />

          {!isMobile && (
            <Styled.MenuItemsWrapper>
              {MENU_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} passHref>
                  <Styled.MenuItem variant="body1" noWrap>
                    {item.label}
                  </Styled.MenuItem>
                </Link>
              ))}
            </Styled.MenuItemsWrapper>
          )}

          <Styled.ActionsWrapper>
            {!isMobile && (
              <IconButton color="default" aria-label="profile">
                <PersonIcon />
              </IconButton>
            )}

            <IconButton color="default" aria-label="shopping cart">
              <ShoppingCartIcon />
            </IconButton>

            {isMobile && (
              <IconButton color="default" onClick={toggleMobileMenu}>
                <MenuIcon />
              </IconButton>
            )}
          </Styled.ActionsWrapper>

          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleMobileMenu}
              onKeyDown={toggleMobileMenu}
            >
              <List>
                {MENU_ITEMS.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <ListItem>
                      <Typography variant="body1">{item.label}</Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </Styled.Toolbar>
      </Styled.AppBar>
    </Box>
  );
}

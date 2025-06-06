"use client";

import { useState } from "react";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

import { MENU_ITEMS } from "@/utils/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" noWrap color="text.primary">
              Logo here
            </Typography>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                gap: 4,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {MENU_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                  <Typography
                    variant="body1"
                    sx={{
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "14px",
                      color: theme.palette.text.secondary,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="default" aria-label="shopping cart">
              <ShoppingCartIcon />
            </IconButton>

            {!isMobile && (
              <IconButton color="default" aria-label="profile">
                <PersonIcon />
              </IconButton>
            )}

            {isMobile && (
              <IconButton color="default" onClick={toggleMobileMenu}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>

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
                  <Link key={item.href} href={item.href} passHref>
                    <ListItem>
                      <Typography variant="body1">{item.label}</Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

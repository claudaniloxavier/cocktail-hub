"use client";

import { useState } from "react";

import {
  AppBar,
  Box,
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
import PersonIcon from "@/components/commons/Icons/Person";
import ShoppingCartIcon from "@/components/commons/Icons/ShoppingCart";

import { MENU_ITEMS } from "./constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: isMobile
            ? theme.palette.background.default
            : theme.palette.background.paper,
          borderRadius: isMobile ? "none" : "999px",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: 88,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" noWrap color="text.primary">
              GAMING HUB
            </Typography>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                px: isSmallScreen ? 2 : 10,
                flex: 1,
              }}
            >
              {MENU_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} passHref>
                  <Typography
                    variant="body1"
                    noWrap
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
                  <Link key={item.label} href={item.href} passHref>
                    <ListItem>
                      <Typography variant="body1">{item.label}</Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

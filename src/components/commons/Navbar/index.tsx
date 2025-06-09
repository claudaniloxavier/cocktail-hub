"use client";
import { useState } from "react";
import { useGameDetails } from "@/hooks/useGameDetails";

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
import ArrowLeftIcon from "../Icons/ArrowLeft";
import Logo from "@/components/commons/Logo";

import { MENU_ITEMS } from "./constants";

import Styled from "./styles";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const { data } = useGameDetails(params.id as string);

  const gameName = data && data[0].name;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleBack = () => {
    router.back();
  };

  const highlightedMenuItem = MENU_ITEMS.find((item) => {
    if (item.href === "/games") {
      return pathname.startsWith("/games");
    }
    return item.href === pathname;
  });

  const isGameDetailPage = /^\/games\/[^/]+$/.test(pathname);
  const renderLogoItem = () => {
    if (isGameDetailPage && isMobile && gameName) {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            color="default"
            aria-label="back"
            onClick={handleBack}
            sx={{ pl: 0 }}
          >
            <ArrowLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            color="text.primary"
            fontWeight={700}
            fontFamily="Open Sans, sans-serif"
            sx={{ maxWidth: 248 }}
          >
            {gameName}
          </Typography>
        </Box>
      );
    }

    return <Logo color="text.secondary" />;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Styled.AppBar position="sticky" elevation={0}>
        <Styled.Toolbar>
          {renderLogoItem()}

          {!isMobile && (
            <Styled.MenuItemsWrapper>
              {MENU_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} passHref>
                  <Styled.MenuItem
                    variant="body1"
                    noWrap
                    color={
                      highlightedMenuItem?.href === item.href
                        ? "primary.main"
                        : "text.secondary"
                    }
                  >
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
              <IconButton
                color="default"
                onClick={toggleMobileMenu}
                aria-label="menu"
              >
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
                      <Typography
                        variant="body1"
                        color={
                          highlightedMenuItem?.href === item.href
                            ? "primary.main"
                            : "text.secondary"
                        }
                      >
                        {item.label}
                      </Typography>
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

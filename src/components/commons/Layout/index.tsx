"use client";
import Navbar from "@/components/commons/Navbar";
import Footer from "@/components/commons/Footer";
import { Container, Box, useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Container
        component="main"
        sx={{
          backgroundColor: theme.palette.background.default,
          pt: isMobile ? 0 : 5,
          pb: isMobile ? 5 : 10,
          px: isMobile ? 0 : 5,
          flex: 1,
        }}
      >
        <Navbar />

        <Box sx={{ flex: 1, pt: isMobile ? 0 : 8 }} component="section">
          {children}
        </Box>
      </Container>

      <Footer />
    </>
  );
}

"use client";
import Navbar from "@/components/commons/Navbar";
import Footer from "@/components/commons/Footer";
import { Container, useTheme } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  return (
    <>
      <Container
        component="main"
        sx={{
          backgroundColor: theme.palette.background.default,
          pt: 5,
          pb: 10,
          flex: 1,
        }}
      >
        <Navbar />

        <Container sx={{ flex: 1, pt: 7 }} disableGutters component="section">
          {children}
        </Container>
      </Container>

      <Footer />
    </>
  );
}

// TODO
// [] Create Footer Component
// [] Create Item component
// [] Create Social Media component
// [] Navbar should show item name in details page when mobile
// [] Use the correct icons
// [] Test with suspense

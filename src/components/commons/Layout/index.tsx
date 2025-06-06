"use client";
import Navbar from "@/components/commons/Navbar";
import Footer from "@/components/commons/Footer";
import { Container } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />

      <Container sx={{ flex: 1 }} component="section">
        {children}
      </Container>

      <Footer />
    </main>
  );
}

// TODO
// [] Create Footer Component
// [] Create Item component
// [] Create Social Media component
// [] Navbar should show item name in details page when mobile
// [] Use the correct icons

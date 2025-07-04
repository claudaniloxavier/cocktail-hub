import type { Metadata } from "next";
import Providers from "@/providers";
import { Inter, Open_Sans } from "next/font/google";

import Layout from "@/components/commons/Layout";

import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gaming hub - Your gaming destination",
  description: "Find and explore your favorite games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${openSans.variable}`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

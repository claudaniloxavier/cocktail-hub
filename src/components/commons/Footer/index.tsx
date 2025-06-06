import { Container, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <p>Footer</p>
    </Container>
  );
}

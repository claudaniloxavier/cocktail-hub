import Link from "next/link";
import Social from "@/components/commons/Social";
import Logo from "@/components/commons/Logo";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { COPYRIGHT_LINKS } from "./constants";

import Styled from "./styles";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const year = new Date().getFullYear();

  return (
    <Container
      component="footer"
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: 5,
        pt: isMobile ? 3.5 : 7.5,
        pb: isMobile ? 3.5 : 7.5,
        pr: isMobile ? 5 : 12,
        pl: isMobile ? 5 : 12,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Logo color="primary.contrastText" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Social />
        </Grid>
      </Grid>

      <Styled.Divider aria-hidden="true" variant="middle" />

      <Styled.Box>
        <Typography variant="body2" color="primary.contrastText" fontSize={16}>
          GAMING HUB © {year}
        </Typography>

        {COPYRIGHT_LINKS.map((link) => (
          <Link href={link.href} key={link.href}>
            <Styled.CopyrightLink
              variant="body2"
              color="primary.contrastText"
              fontSize={16}
            >
              • {link.label}
            </Styled.CopyrightLink>
          </Link>
        ))}
      </Styled.Box>
    </Container>
  );
}

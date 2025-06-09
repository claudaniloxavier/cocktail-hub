import Link from "next/link";
import Social from "@/components/commons/Social";
import Logo from "@/components/commons/Logo";
import { Grid, Typography } from "@mui/material";

import { COPYRIGHT_LINKS } from "./constants";

import Styled from "./styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Styled.FooterContainer component="footer" maxWidth={false} disableGutters>
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
    </Styled.FooterContainer>
  );
}

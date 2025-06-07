import Link from "next/link";
import Social from "@/components/commons/Social";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export const COPYRIGHT_LINKS = [
  {
    href: "/privacy",
    label: "Privacy Policies",
  },
  {
    href: "/terms",
    label: "Terms of Use",
  },
];

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
          <Box>
            <Typography variant="body2" noWrap color="primary.contrastText">
              GAMING HUB
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Social />
        </Grid>
      </Grid>

      <Divider
        aria-hidden="true"
        component="div"
        variant="middle"
        sx={{ ml: 0, mr: 0, borderColor: theme.palette.text.disabled }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1.5,
          mt: 2,
        }}
      >
        <Typography variant="body2" color="primary.contrastText">
          GAMING HUB © {year}
        </Typography>

        {COPYRIGHT_LINKS.map((link) => (
          <Link href={link.href} key={link.href}>
            <Typography
              variant="body2"
              color="primary.contrastText"
              sx={{ textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              • {link.label}
            </Typography>
          </Link>
        ))}
      </Box>
    </Container>
  );
}

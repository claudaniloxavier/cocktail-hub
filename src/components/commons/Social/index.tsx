import { Box, IconButton, Typography, useTheme } from "@mui/material";
import FacebookIcon from "@/components/commons/Icons/Facebook";
import YoutubeIcon from "@/components/commons/Icons/Youtube";
import SpotifyIcon from "@/components/commons/Icons/Spotify";
import InstagramIcon from "@/components/commons/Icons/Instagram";

export default function Social() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color="primary.contrastText"
        sx={{ typography: { xs: "subtitle1", md: "h6" } }}
      >
        Follow us on social media:
      </Typography>

      <Box>
        <IconButton sx={{ color: theme.palette.primary.contrastText }}>
          <YoutubeIcon color="inherit" />
        </IconButton>

        <IconButton sx={{ color: theme.palette.primary.contrastText }}>
          <SpotifyIcon color="inherit" />
        </IconButton>

        <IconButton sx={{ color: theme.palette.primary.contrastText }}>
          <FacebookIcon color="inherit" />
        </IconButton>

        <IconButton sx={{ color: theme.palette.primary.contrastText }}>
          <InstagramIcon color="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
}

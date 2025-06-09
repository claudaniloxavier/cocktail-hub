import { Box, IconButton, Typography, useTheme } from "@mui/material";
import FacebookIcon from "@/components/commons/Icons/Facebook";
import YoutubeIcon from "@/components/commons/Icons/Youtube";
import SpotifyIcon from "@/components/commons/Icons/Spotify";
import InstagramIcon from "@/components/commons/Icons/Instagram";

import Styled from "./styles";

export default function Social() {
  const theme = useTheme();

  const SocialMediaIcons = [
    { Icon: YoutubeIcon, label: "YouTube" },
    { Icon: SpotifyIcon, label: "Spotify" },
    { Icon: FacebookIcon, label: "Facebook" },
    { Icon: InstagramIcon, label: "Instagram" },
  ];

  return (
    <Styled.Box>
      <Typography
        variant="h6"
        fontWeight={600}
        color="primary.contrastText"
        fontFamily="Open Sans"
        sx={{ typography: { xs: "subtitle1", md: "h6" } }}
      >
        Follow us on social media:
      </Typography>

      <Box>
        {SocialMediaIcons.map(({ Icon, label }) => (
          <IconButton
            key={label}
            sx={{ color: theme.palette.primary.contrastText }}
            aria-label={label}
          >
            <Icon color="inherit" />
          </IconButton>
        ))}
      </Box>
    </Styled.Box>
  );
}

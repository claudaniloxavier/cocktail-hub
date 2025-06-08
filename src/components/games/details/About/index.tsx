import { Typography, useMediaQuery, useTheme } from "@mui/material";

import { GameAboutProps as Props } from "./types";

export default function GameAbout({ storyline, summary }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Typography
      variant={isMobile ? "body2" : "body1"}
      color="text.secondary"
      sx={{ textAlign: "justify" }}
    >
      {summary!}

      <br />
      <br />

      {storyline}
    </Typography>
  );
}

"use client";

import { useGames } from "@/hooks/useGames";
import GameCard from "../GameCard";
import { Box, Grid, useTheme } from "@mui/material";

export default function GameList() {
  const theme = useTheme();

  const { games, totalPages } = useGames();

  console.log("GameList data:", games);
  console.log("Total pages:", totalPages);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: "16px",
        pt: 2,
        pb: 3,
        pl: 2.5,
        pr: 2.5,
        mt: 5,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <GameCard />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <GameCard />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <GameCard />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <GameCard />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <GameCard />
        </Grid>
      </Grid>
    </Box>
  );
}

"use client";

import { useGames } from "@/hooks/useGames";
import GameCard from "../GameCard";
import { Box, Grid, Pagination, useTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function GameList() {
  const theme = useTheme();

  const [page, setPage] = useState(1);
  const { games, totalPages, currentPage } = useGames(page);

  console.log("GameList data:", games);
  console.log("Total pages:", totalPages);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Load and error feedback here
  if (!games) {
    return;
  }

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
        {games.map((game) => (
          <Grid key={`card-game-${game.id}`} size={{ xs: 12, sm: 6, md: 3 }}>
            <GameCard {...game} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        size="large"
        page={currentPage}
        onChange={handlePageChange}
        hidePrevButton
        hideNextButton
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      />
    </Box>
  );
}

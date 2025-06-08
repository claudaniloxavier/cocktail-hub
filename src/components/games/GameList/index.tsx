"use client";

import { useGames } from "@/hooks/useGames";
import GameCard from "../GameCard";
import {
  Box,
  Grid,
  Pagination,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { GameCardSkeleton } from "../GameCard/skeleton";
import { ChangeEvent, useState } from "react";
import Show from "@/components/commons/Show";
import EmptyState from "../EmptyState";

const MOCK_SKELETON_GAMES = Array.from({ length: 12 });

export default function GameList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [page, setPage] = useState(1);
  const {
    games = [],
    isLoading,
    error,
    totalPages,
    currentPage,
  } = useGames(page);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if ((!isLoading && games.length === 0) || error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          mt: 5,
        }}
      >
        <EmptyState />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ px: isMobile ? 2 : 0 }}>
        Games
      </Typography>

      <Box sx={{ mt: isMobile ? 3 : 5, mx: isMobile ? 2 : 0 }}>
        <Show if={isLoading}>
          <Grid container spacing={2}>
            {MOCK_SKELETON_GAMES.map((_, index) => (
              <Grid
                key={`card-game-skeleton-${index}`}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <GameCardSkeleton key={`skeleton-game-${index}`} />
              </Grid>
            ))}
          </Grid>
        </Show>

        <Show if={!isLoading}>
          <Grid container spacing={2}>
            {games.map((game) => (
              <Grid
                key={`card-game-${game.id}`}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
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
        </Show>
      </Box>
    </Box>
  );
}

// ADJUST PAGINANTION SIZE ON MOBILE

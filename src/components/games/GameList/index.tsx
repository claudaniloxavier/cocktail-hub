"use client";

import { useGames } from "@/hooks/useGames";
import GameCard from "../GameCard";
import { Box, Grid } from "@mui/material";
import { GameCardSkeleton } from "../GameCard/skeleton";
import { ChangeEvent, useState } from "react";
import Show from "@/components/commons/Show";
import EmptyState from "../EmptyState";

import Styled from "./styles";

const MOCK_SKELETON_GAMES = Array.from({ length: 12 });

export default function GameList() {
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
      <Styled.EmptyBox>
        <EmptyState />
      </Styled.EmptyBox>
    );
  }

  return (
    <Box>
      <Styled.PageTitle
        variant="h4"
        component="h1"
        fontFamily="Open Sans, sans-serif"
        fontWeight={700}
        fontSize={32}
        color="text.primary"
      >
        Games
      </Styled.PageTitle>

      <Styled.ContentBox>
        <Show if={isLoading}>
          <Grid container spacing={2}>
            {MOCK_SKELETON_GAMES.map((_, index) => (
              <Grid
                key={`card-game-skeleton-${index}`}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
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

          <Styled.Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            size="large"
            page={currentPage}
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
          />
        </Show>
      </Styled.ContentBox>
    </Box>
  );
}

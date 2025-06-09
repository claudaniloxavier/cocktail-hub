"use client";

import React, { useEffect } from "react";

import { useParams, useRouter } from "next/navigation";
import { useGameDetails } from "@/hooks/useGameDetails";
import { useBuildGameInformations } from "@/components/games/details/Informations/hooks/useBuildGameInformations";

import {
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GameAbout from "@/components/games/details/About";
import GameInformations from "@/components/games/details/Informations";

import Show from "@/components/commons/Show";
import GameDetailSkeleton from "@/components/games/details/Detail/skeleton";

import Styled from "./styles";

export default function GameDetailPage() {
  const theme = useTheme();
  const params = useParams();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading, isError } = useGameDetails(params.id as string);
  const { mainInfo, secondaryInfo } = useBuildGameInformations(
    data && data[0],
    isMobile
  );

  const { name, cover, summary, storyline } = data && data[0] ? data[0] : {};
  const coverUrl = cover?.url.replace("t_thumb", "t_1080p");

  useEffect(() => {
    if (isError) {
      router.push("/games");
    }
  }, [isError, router]);

  return (
    <>
      <Show if={isLoading}>
        <GameDetailSkeleton />
      </Show>

      <Show if={!isLoading}>
        <Styled.Box component="img" src={coverUrl} alt={name} />

        <Styled.Card>
          <CardContent>
            {!isMobile && (
              <Typography
                variant={isMobile ? "h6" : "h3"}
                component="h1"
                fontWeight={700}
                fontFamily="Open Sans, sans-serif"
                noWrap
                gutterBottom
                color="textSecondary"
              >
                {name}
              </Typography>
            )}

            <Typography
              variant="h6"
              fontWeight={600}
              fontFamily="Open Sans, sans-serif"
              color="textSecondary"
              gutterBottom
            >
              Informations
            </Typography>

            <GameInformations
              mainInfo={mainInfo}
              secondaryInfo={secondaryInfo}
            />

            <Typography
              component="h3"
              variant={isMobile ? "h6" : "h5"}
              fontWeight="bold"
              color={isMobile ? "text.secondary" : "text.primary"}
              fontFamily="Open Sans, sans-serif"
            >
              About {name}
            </Typography>

            <GameAbout storyline={storyline} summary={summary} />
          </CardContent>
        </Styled.Card>
      </Show>
    </>
  );
}

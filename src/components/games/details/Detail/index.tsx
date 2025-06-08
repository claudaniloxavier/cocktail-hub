"use client";

import React from "react";
import {
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Styled from "./styles";

import GameAbout from "../About";
import GameInformations from "../Informations";
import { useParams } from "next/navigation";

import { useGameDetails } from "@/hooks/useGameDetails";
import { useBuildGameInformations } from "../Informations/useBuildGameInformations";

export default function GameDetailPage() {
  const theme = useTheme();
  const params = useParams();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { data } = useGameDetails(params.id as string);

  const { mainInfo, secondaryInfo } = useBuildGameInformations(
    data && data[0],
    isMobile
  );

  const { name, cover, summary, storyline } = data && data[0] ? data[0] : {};
  const coverUrl = cover?.url.replace("t_thumb", "t_1080p");

  return (
    <>
      <Styled.Box component="img" src={coverUrl} alt={name} />

      <Styled.Card>
        <CardContent>
          {!isMobile && (
            <Typography
              variant={isMobile ? "h6" : "h3"}
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              {name}
            </Typography>
          )}

          <Typography variant="h6" fontWeight="medium" gutterBottom>
            Informations
          </Typography>

          <GameInformations mainInfo={mainInfo} secondaryInfo={secondaryInfo} />

          <Typography
            component="h3"
            variant={isMobile ? "h6" : "h5"}
            fontWeight="bold"
            color={isMobile ? "text.secondary" : "text.primary"}
            gutterBottom
          >
            About {name}
          </Typography>

          <GameAbout storyline={storyline} summary={summary} />
        </CardContent>
      </Styled.Card>
    </>
  );
}

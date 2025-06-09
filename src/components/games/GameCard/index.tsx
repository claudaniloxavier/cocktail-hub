import { useRouter } from "next/navigation";

import { useTheme, useMediaQuery } from "@mui/material";

import {
  PS4_PLATFORM_ID,
  PS5_PLATFORM_ID,
  SWITCH_PLATFORM_ID,
} from "@/lib/igdb/constants";

import { Game } from "@/types/game";
import Styled from "./styles";

export default function GameCard({
  id,
  cover,
  name,
  platforms,
  rating,
  first_release_date,
}: Game) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gameReleaseDate = first_release_date
    ? new Date(first_release_date * 1000).getFullYear()
    : "N/A";

  const gameMainPlatform = platforms?.find(
    (p) =>
      p.id === PS5_PLATFORM_ID ||
      p.id === PS4_PLATFORM_ID ||
      p.id === SWITCH_PLATFORM_ID
  );

  const formattedRating = rating ? `rat. ${Math.round(rating)}` : "Rating n/a";
  const coverUrl = isMobile
    ? cover?.url.replace("t_thumb", "t_logo_med")
    : cover?.url.replace("t_thumb", "t_cover_big");

  const handleClick = () => {
    router.push(`/games/${id}`);
  };

  return (
    <Styled.GameCard>
      <Styled.GameCardMedia component="img" image={coverUrl} alt={name} />

      <Styled.GameCardContent>
        <Styled.GameTitle
          variant="h6"
          component="h2"
          fontWeight="bold"
          align="left"
          fontFamily="Open Sans, sans-serif"
          title={name}
        >
          {name}
        </Styled.GameTitle>

        <Styled.GameSecondaryInfo
          variant="caption"
          align="left"
          color="text.secondary"
        >
          {gameMainPlatform?.name} | {gameReleaseDate} | {formattedRating}
        </Styled.GameSecondaryInfo>

        <Styled.Button onClick={handleClick} variant="outlined">
          Show more
        </Styled.Button>
      </Styled.GameCardContent>
    </Styled.GameCard>
  );
}

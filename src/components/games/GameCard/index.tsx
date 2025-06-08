import { useRouter } from "next/navigation";

import { useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const router = useRouter();
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
  const coverUrl = cover?.url.replace("t_thumb", "t_cover_big");

  const handleClick = () => {
    router.push(`/games/${id}`);
  };

  return (
    <Styled.GameCard>
      <Styled.GameCardMedia component="img" image={coverUrl} alt={name} />

      <Styled.GameCardContent>
        <Styled.GameTitle
          variant="h6"
          fontWeight="bold"
          align="left"
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

        <Styled.Button
          onClick={handleClick}
          variant="outlined"
          sx={{
            borderColor: theme.palette.primary.main,
            borderRadius: "16px",
            color: theme.palette.text.primary,
            fontSize: "16px",
            fontWeight: "600",
            px: 3,
            py: 1.5,
            width: "100%",
            alignSelf: isMobile ? "flex-start" : "center",
            "&:hover": {
              color: theme.palette.primary.dark,
            },
          }}
        >
          Ver mais
        </Styled.Button>
      </Styled.GameCardContent>
    </Styled.GameCard>
  );
}

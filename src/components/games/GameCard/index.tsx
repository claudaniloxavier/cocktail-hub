import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  PS4_PLATFORM_ID,
  PS5_PLATFORM_ID,
  SWITCH_PLATFORM_ID,
} from "@/lib/igdb/constants";
import { useRouter } from "next/navigation";

import { Game } from "@/types/game";

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

  const selectedPlatform = platforms?.find(
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
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        p: 2,
        border: "1px solid",
        borderColor: theme.palette.divider,
        borderRadius: 1,
        boxShadow: 0,
        maxWidth: isMobile ? "100%" : 289,
        maxHeight: isMobile ? 161 : 423,
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={coverUrl}
        alt={name}
        sx={{
          maxHeight: isMobile ? 96 : 256,
          maxWidth: isMobile ? 96 : 256,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          mr: isMobile ? 2 : 0,
          mb: isMobile ? 0 : 2,
          borderRadius: "8px",
        }}
      />

      <CardContent
        sx={{
          p: 0,
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          textAlign: isMobile ? "left" : "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          align="left"
          title={name}
          sx={{
            color: theme.palette.text.secondary,
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            display: "-webkit-box",
            width: "100%",
            lineHeight: "1.2",
            cursor: "default",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="caption"
          align="left"
          color="text.secondary"
          sx={{ mb: 2, width: "100%", mt: isMobile ? 1 : 0 }}
        >
          {selectedPlatform?.slug?.toUpperCase()} | {gameReleaseDate} |{" "}
          {formattedRating}
        </Typography>

        <Button
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
        </Button>
      </CardContent>
    </Card>
  );
}

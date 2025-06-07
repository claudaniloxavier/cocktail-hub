import { Typography } from "@mui/material";
import GameList from "@/components/games/GameList";

export default function Games() {
  // const { data } = useGames(20, 10);

  // console.log("data", data);
  return (
    <>
      <Typography variant="h4" component="h1">
        Games
      </Typography>

      <GameList />
    </>
  );
}

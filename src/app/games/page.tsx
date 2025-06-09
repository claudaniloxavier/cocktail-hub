import { Metadata } from "next";
import GameList from "@/components/games/GameList";

export const metadata: Metadata = {
  title: "Games | Gaming Hub",
  description: "Find and explore your favorite games",
};

export default function Games() {
  return <GameList />;
}

// TODO
// FAVICON
// [OK] - PAGE TITLE
// [OK] - META DESCRIPTION
// [OK] - NAVBAR HEADER REDIRECT TO HOME OR USER SELECT NONE

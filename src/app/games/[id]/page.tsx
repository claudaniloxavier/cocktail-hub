import { Metadata } from "next";
import GameDetailPage from "@/components/games/details/Detail";

export const metadata: Metadata = {
  title: "Game Details | Gaming Hub",
  description: "Find and explore your favorite games",
};

export default function Game() {
  return <GameDetailPage />;
}

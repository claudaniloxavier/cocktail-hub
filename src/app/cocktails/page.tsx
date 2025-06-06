"use client";
import { useGames } from "@/hooks/useGames";

export default function Cocktails() {
  const { data } = useGames(20, 10);

  console.log("data", data);
  return (
    <>
      <h1>Welcome to the Cocktails Page</h1>
      <p>This is the main content of the cocktails page.</p>
    </>
  );
}

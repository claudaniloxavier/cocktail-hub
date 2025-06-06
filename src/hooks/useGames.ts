"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "@/lib/igdb";

const QUERY_STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const useGames = (offset: number = 0, limit: number = 20) => {
  return useQuery({
    queryKey: ["games", offset],
    queryFn: () => fetchGames(offset, limit),
    staleTime: QUERY_STALE_TIME,
  });
};

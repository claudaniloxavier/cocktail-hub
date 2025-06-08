"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGameDetails } from "@/lib/igdb";

import { Game } from "@/types/game";

import type { UseQueryResult } from "@tanstack/react-query";

export const useGameDetails = (id: string): UseQueryResult<Game[], Error> => {
  return useQuery<Game[], Error>({
    queryKey: ["game", id],
    queryFn: () => fetchGameDetails(id),
    enabled: !!id,
  });
};

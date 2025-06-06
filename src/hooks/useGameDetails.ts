"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGameDetails } from "@/lib/igdb";

const QUERY_STALE_TIME = 1000 * 60 * 5; // 5 minutes

export const useGameDetails = (id: number) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGameDetails(id),
    enabled: !!id,
    staleTime: QUERY_STALE_TIME,
  });
};

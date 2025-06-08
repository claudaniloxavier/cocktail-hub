"use server";

import { Game } from "@/types/game";
import {
  IGDB_BASE_URL,
  TWITCH_AUTH_URL,
  PS4_PLATFORM_ID,
  PS5_PLATFORM_ID,
  SWITCH_PLATFORM_ID,
} from "./constants";

let cachedToken: string | null = null;
let tokenExpiration: number = 0;

const getToken = async () => {
  const now = Date.now();

  if (cachedToken && now < tokenExpiration) {
    return cachedToken;
  }

  const queryParams = new URLSearchParams({
    client_id: process.env.TWITCH_CLIENT_ID!,
    client_secret: process.env.TWITCH_CLIENT_SECRET!,
    grant_type: "client_credentials",
  });

  const res = await fetch(`${TWITCH_AUTH_URL}?${queryParams.toString()}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    cache: "no-store",
  });

  const data = await res.json();

  cachedToken = data.access_token;
  tokenExpiration = Date.now() + data.expires_in * 1000 - 10_000;

  return cachedToken;
};

const igdbFetch = async <T>(query: string, endpoint = "games"): Promise<T> => {
  const token = await getToken();

  const res = await fetch(`${IGDB_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID!,
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
    },
    body: query,
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("IGDB API error:", res.status, res.statusText);
  }

  return res.json();
};

export const fetchGames = async (offset = 0, limit = 20): Promise<Game[]> => {
  return igdbFetch<Game[]>(
    `
      fields id, name, cover.url, summary, rating, platforms.slug, first_release_date;
      sort popularity desc;
      where platforms = (${PS5_PLATFORM_ID}, ${PS4_PLATFORM_ID}, ${SWITCH_PLATFORM_ID});
      limit ${limit};
      offset ${offset};
    `
  );
};

export const fetchGamesCount = async (): Promise<number> => {
  const res = await igdbFetch<{ count: number }>(
    `
      where platforms = (${PS5_PLATFORM_ID}, ${PS4_PLATFORM_ID}, ${SWITCH_PLATFORM_ID});
    `,
    "games/count"
  );

  return res.count;
};

export const fetchGameDetails = async (gameId: string): Promise<Game[]> => {
  return igdbFetch(
    `
      fields id, name, cover.url, first_release_date, summary, storyline, rating, genres.name, platforms.name, dlcs, game_type.type, game_engines.name;
      where id = ${gameId};
    `
  );
};

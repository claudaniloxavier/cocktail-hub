"use server";

import { IGDB_BASE_URL, TWITCH_AUTH_URL } from "./constants";

let cachedToken: string | null = null;
let tokenExpiration: number = 0;

const getToken = async () => {
  const now = Date.now();

  console.log("Fetching new token if needed...", process.env.TWITCH_CLIENT_ID);

  if (cachedToken && now < tokenExpiration) {
    return cachedToken;
  }

  const queryParams = new URLSearchParams({
    client_id: process.env.TWITCH_CLIENT_ID!,
    client_secret: process.env.TWITCH_CLIENT_SECRET!,
    grant_type: "client_credentials",
  });

  const res = await fetch(
    `${TWITCH_AUTH_URL}/token?${queryParams.toString()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      cache: "no-store",
    }
  );

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
    throw new Error(`IGDB API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export const fetchGames = async (offset = 0, limit = 20) => {
  return igdbFetch(
    `
      fields id, name, cover.url, first_release_date, summary, rating, genres.name, platforms.name;
      sort popularity desc;
      limit ${limit};
      offset ${offset};
    `
  );
};

export const fetchGameDetails = async (gameId: number) => {
  return igdbFetch(
    `
      fields id, name, cover.url, first_release_date, summary, rating, genres.name, platforms.name, screenshots.url;
      where id = ${gameId};
    `
  );
};

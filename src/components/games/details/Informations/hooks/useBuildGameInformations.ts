import { useMemo } from "react";
import { Game } from "@/types/game";
import {
  PS4_PLATFORM_ID,
  PS5_PLATFORM_ID,
  SWITCH_PLATFORM_ID,
} from "@/lib/igdb/constants";

import { GameInformation } from "../types";

export function useBuildGameInformations(
  gameInfo: Game | undefined,
  isMobile: boolean
): GameInformation {
  return useMemo(() => {
    if (!gameInfo) {
      return {
        mainInfo: [],
        secondaryInfo: [],
      };
    }

    const mainInfo = [];
    const secondaryInfo = [];

    const {
      first_release_date,
      genres,
      platforms,
      rating,
      dlcs,
      game_engines,
      game_type,
    } = gameInfo;

    const releaseDate = first_release_date
      ? new Date(first_release_date * 1000).toLocaleDateString("en-US")
      : "-";
    const formattedRating = rating ? `${Math.round(rating)}` : "-";

    if (isMobile) {
      mainInfo.push(
        {
          label: "Release date",
          value: releaseDate,
        },
        {
          label: "Platforms",
          value:
            platforms?.find((p) =>
              [PS5_PLATFORM_ID, SWITCH_PLATFORM_ID, PS4_PLATFORM_ID].includes(
                p.id
              )
            )?.name ||
            platforms?.[0]?.name ||
            "-",
        },
        {
          label: "Genre",
          value: genres ? genres[0].name : "-",
        },
        {
          label: "Rating",
          value: formattedRating,
        }
      );

      secondaryInfo.push(
        {
          label: "Game Engines",
          value: game_engines ? game_engines[0].name : "-",
        },
        {
          label: "Game Type",
          value: game_type ? game_type.type : "-",
        },
        {
          label: "DLCs",
          value: dlcs?.length ? "Yes" : "-",
        }
      );

      return {
        mainInfo,
        secondaryInfo,
      };
    }

    mainInfo.push(
      {
        label: "Release date",
        value: releaseDate,
      },
      {
        label: "Platforms",
        value:
          platforms?.find((p) =>
            [PS5_PLATFORM_ID, SWITCH_PLATFORM_ID, PS4_PLATFORM_ID].includes(
              p.id
            )
          )?.name ||
          platforms?.[0]?.name ||
          "-",
      },
      {
        label: "Genres",
        value: genres ? genres[0].name : "-",
      },
      {
        label: "Rating",
        value: formattedRating,
      },
      {
        label: "Game Engines",
        value: game_engines ? game_engines[0].name : "-",
      },
      {
        label: "Game Type",
        value: game_type ? game_type.type : "-",
      },
      {
        label: "DLCs",
        value: dlcs?.length ? "Yes" : "-",
      }
    );

    return {
      mainInfo,
      secondaryInfo: [],
    };
  }, [gameInfo, isMobile]);
}

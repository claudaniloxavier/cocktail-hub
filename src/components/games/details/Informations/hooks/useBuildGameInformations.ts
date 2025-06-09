import { useMemo } from "react";
import {
  PS4_PLATFORM_ID,
  PS5_PLATFORM_ID,
  SWITCH_PLATFORM_ID,
} from "@/lib/igdb/constants";

import { Game } from "@/types/game";
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
      : "N/A";
    const formattedRating = rating ? `${Math.round(rating)}` : "N/A";

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
            "N/A",
        },
        {
          label: "Genre",
          value: genres ? genres[0].name : "N/A",
        },
        {
          label: "Rating",
          value: formattedRating,
        }
      );

      secondaryInfo.push(
        {
          label: "Game Engines",
          value: game_engines ? game_engines[0].name : "N/A",
        },
        {
          label: "Game Type",
          value: game_type ? game_type.type : "N/A",
        },
        {
          label: "DLCs",
          value: dlcs?.length ? "Yes" : "N/A",
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
          "N/A",
      },
      {
        label: "Genre",
        value: genres ? genres[0].name : "N/A",
      },
      {
        label: "Rating",
        value: formattedRating,
      },
      {
        label: "Game Engines",
        value: game_engines ? game_engines[0].name : "N/A",
      },
      {
        label: "Game Type",
        value: game_type ? game_type.type : "N/A",
      },
      {
        label: "DLCs",
        value: dlcs?.length ? "Yes" : "N/A",
      }
    );

    return {
      mainInfo,
      secondaryInfo: [],
    };
  }, [gameInfo, isMobile]);
}

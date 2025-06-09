import { renderHook } from "@testing-library/react";
import { useBuildGameInformations } from "./useBuildGameInformations";
import { Game } from "@/types/game";

const MOCK_GAME_INFO: Game = {
  id: 123,
  name: "Test Game",
  first_release_date: 804803797,
  genres: [{ name: "Adventure" }],
  platforms: [{ id: 1, name: "PC" }],
  rating: 85,
  dlcs: [],
  game_engines: [{ name: "Unreal Engine", id: 1 }],
  game_type: {
    id: 1,
    type: "Single-player",
  },
};

const MOCK_GAME_MAIN_INFO_DESKTOP = [
  { label: "Release date", value: "7/3/1995" },
  { label: "Platforms", value: "PC" },
  { label: "Genre", value: "Adventure" },
  { label: "Rating", value: "85" },
  { label: "Game Engines", value: "Unreal Engine" },
  { label: "Game Type", value: "Single-player" },
  { label: "DLCs", value: "-" },
];

const MOCK_GAME_MAIN_INFO_MOBILE = [
  { label: "Release date", value: "7/3/1995" },
  { label: "Platforms", value: "PC" },
  { label: "Genre", value: "Adventure" },
  { label: "Rating", value: "85" },
];

const MOCK_GAME_SECONDARY_INFO_MOBILE = [
  { label: "Game Engines", value: "Unreal Engine" },
  { label: "Game Type", value: "Single-player" },
  { label: "DLCs", value: "-" },
];

describe("useBuildGameInformations", () => {
  it("should return empty arrays when gameInfo is undefined", () => {
    const hook = renderHook(() => useBuildGameInformations(undefined, false));
    expect(hook.result.current).toEqual({ mainInfo: [], secondaryInfo: [] });
  });

  it("should build main and secondary info correctly for desktop", () => {
    const hook = renderHook(() =>
      useBuildGameInformations(MOCK_GAME_INFO, false)
    );

    expect(hook.result.current.mainInfo).toEqual(MOCK_GAME_MAIN_INFO_DESKTOP);
    expect(hook.result.current.secondaryInfo).toEqual([]);
  });

  it("should build main and secondary info correctly for mobile", () => {
    const hook = renderHook(() =>
      useBuildGameInformations(MOCK_GAME_INFO, true)
    );

    expect(hook.result.current.mainInfo).toEqual(MOCK_GAME_MAIN_INFO_MOBILE);
    expect(hook.result.current.secondaryInfo).toEqual(
      MOCK_GAME_SECONDARY_INFO_MOBILE
    );
  });
});

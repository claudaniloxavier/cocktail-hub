import { render, screen } from "@testing-library/react";
import { queryTestProvider } from "@/lib/react-query/test-helper";

import GameInformations from ".";

const MOCK_GAME_MAIN_INFO = [
  { label: "Release date", value: "7/3/1995" },
  { label: "Platforms", value: "PC" },
  { label: "Genre", value: "Adventure" },
  { label: "Rating", value: "85" },
];

const MOCK_GAME_SECONDARY_INFO = [
  { label: "Game Engines", value: "Unreal Engine" },
  { label: "Game Type", value: "Single-player" },
  { label: "DLCs", value: "N/A" },
];

describe("<GameInformations />", () => {
  it("should render main and secondary game information", () => {
    render(
      <GameInformations
        mainInfo={MOCK_GAME_MAIN_INFO}
        secondaryInfo={MOCK_GAME_SECONDARY_INFO}
      />,
      { wrapper: queryTestProvider }
    );

    MOCK_GAME_MAIN_INFO.forEach(({ label, value }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });

    MOCK_GAME_SECONDARY_INFO.forEach(({ label, value }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";

import GameCard from ".";
import { GameCardSkeleton } from "./skeleton";
import { Game } from "@/types/game";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

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

describe("<GameCard />", () => {
  it("should render game card with correct information", () => {
    render(<GameCard {...MOCK_GAME_INFO} />);

    expect(screen.getByText(MOCK_GAME_INFO.name)).toBeInTheDocument();
    expect(screen.getByText("rat. 85", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("1995", { exact: false })).toBeInTheDocument();
  });

  it("should handle redirect to game details page", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    render(<GameCard {...MOCK_GAME_INFO} />);

    const redirectButton = screen.getByRole("button", {
      name: "Show more",
    });

    await userEvent.click(redirectButton);

    expect(mockPush).toHaveBeenCalledWith(`/games/${MOCK_GAME_INFO.id}`);
  });
});

describe("<GameCardSkeleton />", () => {
  it("should render skeleton correctly", () => {
    render(<GameCardSkeleton />);

    expect(screen.getByTestId("game-card-skeleton")).toBeInTheDocument();
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import { queryTestProvider } from "@/lib/react-query/test-helper";

import { useGames } from "@/hooks/useGames";

import GameList from ".";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../../hooks/useGames", () => ({
  useGames: jest.fn(),
}));

const MOCK_GAMES = [
  {
    id: 1,
    name: "Zelda: Breath of the Wild",
    summary: "An open-world adventure game.",
    storyline: "Link must save Hyrule from Calamity Ganon.",
  },
  {
    id: 2,
    name: "Super Mario Odyssey",
    summary: "A platform game featuring Mario.",
    storyline: "Mario travels across worlds to save Princess Peach.",
  },
];

const mockedUseGames = useGames as jest.Mock;

describe("<GameList />", () => {
  beforeEach(() => {
    (useGames as jest.Mock).mockReturnValue({
      games: MOCK_GAMES,
      isLoading: false,
      error: null,
      totalPages: 5,
      currentPage: 1,
    });
  });

  it("should render the game list page", () => {
    render(<GameList />, { wrapper: queryTestProvider });

    expect(screen.getByRole("heading", { name: "Games" })).toBeInTheDocument();

    for (const game of MOCK_GAMES) {
      expect(screen.getByText(game.name)).toBeInTheDocument();
    }
  });

  it("should show empty state when no games are available", () => {
    (useGames as jest.Mock).mockReturnValue({
      games: [],
      isLoading: false,
      error: null,
    });

    render(<GameList />, { wrapper: queryTestProvider });

    expect(screen.getByText("No Games Available")).toBeInTheDocument();
  });

  it("should show loading skeletons when games are loading", () => {
    (useGames as jest.Mock).mockReturnValue({
      games: [],
      isLoading: true,
      error: null,
    });

    render(<GameList />, { wrapper: queryTestProvider });

    expect(screen.getAllByTestId("game-card-skeleton")).toHaveLength(12);
  });

  it("should handle page change", async () => {
    mockedUseGames.mockReturnValueOnce({
      games: [{ id: 1, name: "Jogo 1" }],
      isLoading: false,
      error: null,
      totalPages: 2,
      currentPage: 1,
    });

    render(<GameList />, { wrapper: queryTestProvider });

    mockedUseGames.mockReturnValueOnce({
      games: [{ id: 2, name: "Jogo 2" }],
      isLoading: false,
      error: null,
      totalPages: 2,
      currentPage: 2,
    });

    const pagination = screen.getByRole("navigation");
    expect(pagination).toBeInTheDocument();

    const page2Button = screen.getByRole("button", { name: "Go to page 2" });
    expect(page2Button).toBeInTheDocument();

    await userEvent.click(page2Button);

    await waitFor(() => {
      expect(screen.getByText("Jogo 2")).toBeInTheDocument();
      expect(screen.queryByText("Jogo 1")).not.toBeInTheDocument();
    });
  });
});

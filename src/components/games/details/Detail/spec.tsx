import { render, screen } from "@testing-library/react";
import { queryTestProvider } from "@/lib/react-query/test-helper";

import { useGameDetails } from "@/hooks/useGameDetails";
import { useParams, usePathname, useRouter } from "next/navigation";

import GameDetailPage from ".";

jest.mock("@mui/material", () => {
  const original = jest.requireActual("@mui/material");
  return {
    ...original,
    useMediaQuery: jest.fn(),
  };
});

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("../../../../hooks/useGameDetails", () => ({
  useGameDetails: jest.fn(),
}));

describe("<GameDetailPage />", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/games/123");
    (useParams as jest.Mock).mockReturnValue({ id: "123" });
    (useGameDetails as jest.Mock).mockReturnValue({
      data: [
        {
          name: "Zelda: Breath of the Wild",
          summary: "An open-world adventure game.",
          storyline: "Link must save Hyrule from Calamity Ganon.",
        },
      ],
    });
  });

  it("should render the game details page", () => {
    render(<GameDetailPage />, { wrapper: queryTestProvider });

    expect(
      screen.getByRole("heading", { name: "Zelda: Breath of the Wild" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Zelda: Breath of the Wild" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("An open-world adventure game.", { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Link must save Hyrule from Calamity Ganon.", {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("should handle loading state", () => {
    (useGameDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<GameDetailPage />, { wrapper: queryTestProvider });

    expect(screen.getByTestId("game-detail-skeleton")).toBeInTheDocument();
  });

  it("should handle error state", () => {
    const mockRouter = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouter,
    });
    (useGameDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<GameDetailPage />, { wrapper: queryTestProvider });

    expect(mockRouter).toHaveBeenCalledWith("/games");
  });
});

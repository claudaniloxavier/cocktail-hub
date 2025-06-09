import { render, screen } from "@testing-library/react";
import { queryTestProvider } from "@/lib/react-query/test-helper";
import userEvent from "@testing-library/user-event";

import { MENU_ITEMS } from "./constants";
import Navbar from ".";
import * as mui from "@mui/material";
import { useGameDetails } from "@/hooks/useGameDetails";
import { usePathname, useParams, useRouter } from "next/navigation";

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

jest.mock("../../../hooks/useGameDetails", () => ({
  useGameDetails: jest.fn(),
}));

describe("<Navbar />", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/games/123");
    (useParams as jest.Mock).mockReturnValue({ id: "123" });
    (useGameDetails as jest.Mock).mockReturnValue({
      data: [{ name: "Zelda: Breath of the Wild" }],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the app logo", () => {
    render(<Navbar />, { wrapper: queryTestProvider });
    expect(
      screen.getByRole("heading", { name: "GAMING HUB" })
    ).toBeInTheDocument();
  });

  it("should render the menu itens", () => {
    render(<Navbar />, { wrapper: queryTestProvider });

    MENU_ITEMS.forEach((item) => {
      expect(
        screen.getByRole("link", { name: item.label })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        item.href
      );
    });
  });

  it("should render the menu icon and items on mobile", async () => {
    (mui.useMediaQuery as jest.Mock).mockReturnValue(true);

    render(<Navbar />, { wrapper: queryTestProvider });

    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /menu/i }));

    MENU_ITEMS.forEach((item) => {
      expect(
        screen.getByRole("link", { name: item.label })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        item.href
      );
    });
  });

  it("should hide logo and show game name on mobile game detail page", async () => {
    const mockRouterBack = jest.fn();

    (mui.useMediaQuery as jest.Mock).mockReturnValue(true);
    (useRouter as jest.Mock).mockReturnValue({
      back: mockRouterBack,
    });

    render(<Navbar />, { wrapper: queryTestProvider });

    const backButton = screen.getByRole("button", { name: /back/i });

    expect(screen.getByText("Zelda: Breath of the Wild")).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();

    await userEvent.click(backButton);

    expect(mockRouterBack).toHaveBeenCalled();
  });

  it("should render menu option selected based on current path", () => {
    (mui.useMediaQuery as jest.Mock).mockReturnValue(false);
    (usePathname as jest.Mock).mockReturnValue("/games");

    render(<Navbar />, { wrapper: queryTestProvider });

    const gamesMenuItem = screen.getByRole("link", { name: /Games/i });
    expect(gamesMenuItem).toHaveStyle(`color: var(--AppBar-color)`);
  });
});

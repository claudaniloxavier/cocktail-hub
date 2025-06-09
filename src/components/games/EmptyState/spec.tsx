import { render, screen } from "@testing-library/react";
import EmptyState from ".";

describe("<EmptyState />", () => {
  it("should render correctly", () => {
    render(<EmptyState />);

    expect(
      screen.getByRole("heading", { name: "No Games Available" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "It seems we couldn't find any games right now. Please try again later or check back soon!"
      )
    ).toBeInTheDocument();
  });
});

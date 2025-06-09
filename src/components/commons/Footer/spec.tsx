import { render, screen } from "@testing-library/react";

import { COPYRIGHT_LINKS } from "./constants";
import Footer from "./";

describe("<Footer />", () => {
  it("should correctly renders the app logo", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", {
        name: "GAMING HUB",
      })
    ).toBeInTheDocument();
  });

  it("should render the copyright text with current year", () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(screen.getByText(`GAMING HUB © ${year}`)).toBeInTheDocument();
  });

  it("should renders all copyright links", () => {
    render(<Footer />);

    COPYRIGHT_LINKS.forEach((link) => {
      expect(screen.getByText(`• ${link.label}`)).toBeInTheDocument();
      expect(screen.getByText(`• ${link.label}`).closest("a")).toHaveAttribute(
        "href",
        link.href
      );
    });
  });
});

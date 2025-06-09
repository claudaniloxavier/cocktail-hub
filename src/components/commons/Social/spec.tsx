import React from "react";
import { render, screen } from "@testing-library/react";

import Social from "./";

describe("<Social />", () => {
  it("should correctly renders the social component", () => {
    render(<Social />);
    expect(
      screen.getByRole("heading", { name: "Follow us on social media:" })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("YouTube")).toBeInTheDocument();
    expect(screen.getByLabelText("Spotify")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
  });
});

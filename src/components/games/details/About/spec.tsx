import { render, screen } from "@testing-library/react";

import GameAbout from "./";

const MOCK_PROPS = {
  storyline: "This is a sample storyline for the game.",
  summary: "This is a sample summary for the game.",
};

describe("<GameAbout />", () => {
  it("should render the summary and storyline", () => {
    render(<GameAbout {...MOCK_PROPS} />);

    expect(
      screen.getByText(MOCK_PROPS.summary, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(MOCK_PROPS.storyline, { exact: false })
    ).toBeInTheDocument();
  });
});

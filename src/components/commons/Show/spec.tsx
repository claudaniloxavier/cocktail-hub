import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Show from ".";

describe("<Show />", () => {
  test("should render children component", () => {
    render(
      <Show if={true}>
        <div>Content</div>
      </Show>
    );

    expect(screen.getByText(/Content/)).toBeInTheDocument();
  });

  test("should render nothing", () => {
    render(<Show if={false}>Nothing</Show>);
    expect(screen.queryByText("Nothing")).not.toBeInTheDocument();
  });
});

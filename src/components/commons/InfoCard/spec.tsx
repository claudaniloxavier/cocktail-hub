import { render, screen } from "@testing-library/react";
import InfoCard from ".";

const MOCK_INFO = {
  label: "Test Label",
  value: "Test Value",
};

describe("<InfoCard />", () => {
  it("should render the label and value correctly", () => {
    render(<InfoCard {...MOCK_INFO} />);

    expect(screen.getByText(MOCK_INFO.label)).toBeInTheDocument();
    expect(screen.getByText(MOCK_INFO.value)).toBeInTheDocument();
  });
});

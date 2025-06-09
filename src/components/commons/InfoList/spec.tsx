import { render, screen } from "@testing-library/react";
import InfoList from ".";

const MOCK_LIST = [
  { label: "Test Label 1", value: "Test Value 1" },
  { label: "Test Label 2", value: "Test Value 2" },
];

describe("<InfoList />", () => {
  it("should render the list items correctly", () => {
    render(<InfoList list={MOCK_LIST} />);

    MOCK_LIST.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });
});

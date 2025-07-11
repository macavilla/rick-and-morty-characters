import { screen, render, fireEvent, within } from "@testing-library/react";
import { mockDashboardProps } from "./__mockData__/Dashboard.mock";
import { mockCharacters } from "@/components/CharacterList/__mockData__/CharacterList.mock";

import Dashboard from "./Dashboard";

jest.mock("../../utils/fetchEpisodes", () => ({
  __esModule: true,
  default: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: "Pilot",
        episode: "S01E01",
        air_date: "December 2, 2013",
      },
    ])
  ),
}));

describe("Dashboard", () => {
  it("renders Dashboard and matches snapshot", () => {
    const { container } = render(<Dashboard {...mockDashboardProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders both CharacterList", () => {
    render(<Dashboard characters={mockCharacters} />);

    const lists = screen.getAllByRole("list");
    expect(lists.length).toBe(2);
  });

  it("disables Reset button initially", () => {
    render(<Dashboard characters={mockCharacters} />);
    const resetButton = screen.getByRole("button", {
      name: /reset selection/i,
    });
    expect(resetButton).toBeDisabled();
  });

  it("enables Reset button after selecting characters", () => {
    render(<Dashboard characters={mockCharacters} />);
    const resetButton = screen.getByRole("button", {
      name: /reset selection/i,
    });

    const lists = screen.getAllByRole("list");

    const list1 = lists[0];
    const list2 = lists[1];

    const character1 = within(list1).getByText("Rick Sanchez");
    const character2 = within(list2).getByText("Morty Smith");

    fireEvent.click(character1);
    fireEvent.click(character2);

    expect(resetButton).not.toBeDisabled();
  });
});

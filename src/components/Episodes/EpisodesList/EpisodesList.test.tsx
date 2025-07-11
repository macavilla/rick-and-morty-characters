import { screen, render } from "@testing-library/react";
import { mockEpisodesListProps } from "./__mockData__/EpisodesList.mock";

import EpisodesList from "../EpisodesList/EpisodesList";

describe("EpisodesList", () => {
  it("renders CharacterCard and matches snapshot", () => {
    const { container } = render(<EpisodesList {...mockEpisodesListProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render three EpisodesListList with shared episodes data", () => {
    render(<EpisodesList {...mockEpisodesListProps} />);
  });

  it("renders list of episodes", () => {
    render(<EpisodesList {...mockEpisodesListProps} />);
    expect(
      screen.getByText("S01E01 - Pilot - December 2, 2013")
    ).toBeInTheDocument();
    expect(
      screen.getByText("S01E02 - Lawnmower Dog - December 9, 2013")
    ).toBeInTheDocument();
  });

  it("does not render list when episodes is null", () => {
    render(<EpisodesList {...mockEpisodesListProps} episodes={null} />);
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
});

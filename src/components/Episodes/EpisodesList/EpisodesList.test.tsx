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
});

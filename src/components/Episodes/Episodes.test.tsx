import { screen, render, waitFor } from "@testing-library/react";
import {
  mockEpisodesProps,
  mockFetchEpisodes,
} from "./__mockData__/Episodes.mock";
import fetchEpisodes from "../../utils/fetchEpisodes";

import Episodes from "./Episodes";

jest.mock("../../utils/fetchEpisodes", () => jest.fn());

describe("Episodes", () => {
  beforeAll(() => {
    (fetchEpisodes as jest.Mock).mockResolvedValue(mockFetchEpisodes);
  });
  it("renders Episodes and matches snapshot", async () => {
    const { container } = render(<Episodes {...mockEpisodesProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render three EpisodesList with shared episodes data", async () => {
    render(<Episodes {...mockEpisodesProps} />);
    expect(await screen.findByText("Character 1 episodes"));
    expect(await screen.findByText("Shared episodes"));
    expect(await screen.findByText("Character 2 episodes"));
  });
});

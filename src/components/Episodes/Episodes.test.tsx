import { screen, render, within } from "@testing-library/react";
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

  it("should render three EpisodesList", async () => {
    render(<Episodes {...mockEpisodesProps} />);
    expect(await screen.getByRole("heading", { name: /rick sanchez/i }));
    expect(await screen.getByRole("heading", { name: /shared episodes/i }));
    expect(await screen.getByRole("heading", { name: /morty smith/i }));

    const lists = await screen.findAllByRole("list");
    expect(lists.length).toBe(3);
  });

  it("should render episodes", async () => {
    render(<Episodes {...mockEpisodesProps} />);

    const lists = await screen.findAllByRole("list");

    lists.forEach((list) => {
      expect(
        within(list).getByText("S01E01 - Pilot - December 2, 2013")
      ).toBeInTheDocument();
    });
  });
});

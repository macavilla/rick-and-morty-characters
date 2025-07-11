import { EpisodesProps } from "../Episodes";
import { CharacterType } from "@/types/character";

export const sharedEpisode = "https://rickandmortyapi.com/api/episode/1";

export const mockEpisodesCharacter1: CharacterType["episode"] = [
  sharedEpisode,
  "https://rickandmortyapi.com/api/episode/2",
];

export const mockEpisodesCharacter2: CharacterType["episode"] = [
  sharedEpisode,
  "https://rickandmortyapi.com/api/episode/3",
];

export const mockEpisodesProps: EpisodesProps = {
  character1Episode: mockEpisodesCharacter1,
  character2Episode: mockEpisodesCharacter2,
  characterName1: "Rick Sanchez",
  characterName2: "Morty Smith",
};

export const mockFetchEpisodes = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
  {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z",
  },
  {
    id: 3,
    name: "Anatomy Park",
    air_date: "December 16, 2013",
    episode: "S01E03",
    characters: ["https://rickandmortyapi.com/api/character/1"],
    url: "https://rickandmortyapi.com/api/episode/3",
    created: "2017-11-10T12:56:34.022Z",
  },
];

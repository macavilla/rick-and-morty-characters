import { EpisodeType } from "@/types/episode";

const fetchEpisodes = async (episodes: EpisodeType["id"][]) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodes}`
  );
  const data = await response.json();
  return Array.isArray(data) ? data : [data];
};

export default fetchEpisodes;

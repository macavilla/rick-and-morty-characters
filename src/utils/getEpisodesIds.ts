import { CharacterType } from "@/types/character";

const getEpisodesIds = (episodes: CharacterType["episode"]) => {
  return episodes.map((ep) => Number(ep.split("/").pop()));
};

export default getEpisodesIds;

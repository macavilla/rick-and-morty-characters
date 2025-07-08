import { CharacterType } from "@/types/character";
import EpisodesList from "./EpisodesList/EpisodesList";
import { useEffect, useState } from "react";
import { get } from "https";
import { EpisodeType } from "@/types/episode";
import fetchEpisodes from "@/lib/fetchEpisodes";

interface EpisodesProps {
  character1Episode: CharacterType["episode"] | null;
  character2Episode: CharacterType["episode"] | null;
}

const getEpisodesIds = (episodes: CharacterType["episode"]) => {
  return episodes.map((ep) => Number(ep.split("/").pop()));
};
const Episodes = ({ character1Episode, character2Episode }: EpisodesProps) => {
  const [episodes1, setEpisodes1] = useState<EpisodeType[] | null>(null);
  const [episodes2, setEpisodes2] = useState<EpisodeType[] | null>(null);
  const [sharedEpisodes, setSharedEpisodes] = useState<EpisodeType[] | null>(
    null
  );

  useEffect(() => {
    if (!character1Episode && !character2Episode) return;

    if (character1Episode) {
      fetchEpisodes(getEpisodesIds(character1Episode)).then((episodes) => {
        setEpisodes1(episodes);
      });
    }

    if (character2Episode) {
      fetchEpisodes(getEpisodesIds(character2Episode)).then((episodes) => {
        setEpisodes2(episodes);
      });
    }

    if (character1Episode && character2Episode) {
      const char1EpisodeIds =
        character1Episode && getEpisodesIds(character1Episode);
      const char2EpisodeIds =
        character2Episode && getEpisodesIds(character2Episode);

      const sharedEpisodesIds = char1EpisodeIds?.filter((episodeId) =>
        char2EpisodeIds?.includes(episodeId)
      );

      fetchEpisodes(sharedEpisodesIds).then((episodes) => {
        setSharedEpisodes(episodes);
      });
    }
  }, [character1Episode, character2Episode]);

  return (
    <div className="md:flex justify-between">
      <div className="w-full md:w-1/3">
        <EpisodesList title="Character 1 episodes" episodes={episodes1} />
      </div>
      <div className="w-full md:w-1/3">
        <EpisodesList title="Shared episodes" episodes={sharedEpisodes} />
      </div>
      <div className="w-full md:w-1/3">
        <EpisodesList title="Character 2 episodes" episodes={episodes2} />
      </div>
    </div>
  );
};

export default Episodes;

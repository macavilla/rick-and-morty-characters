import { useEffect, useState } from "react";

import { CharacterType } from "@/types/character";
import { EpisodeType } from "@/types/episode";

import fetchEpisodes from "@/utils/fetchEpisodes";
import getEpisodesIds from "@/utils/getEpisodesIds";

import EpisodesList from "./EpisodesList/EpisodesList";

export interface EpisodesProps {
  character1Episode: CharacterType["episode"] | null;
  character2Episode: CharacterType["episode"] | null;
}

const Episodes = ({ character1Episode, character2Episode }: EpisodesProps) => {
  const [episodes, setEpisodes] = useState<{
    character1: EpisodeType[] | null;
    character2: EpisodeType[] | null;
  }>({ character1: null, character2: null });

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      if (!character1Episode && !character2Episode) {
        setEpisodes({ character1: null, character2: null });
      }

      const char1Ids = character1Episode
        ? getEpisodesIds(character1Episode)
        : [];
      const char2Ids = character2Episode
        ? getEpisodesIds(character2Episode)
        : [];

      const allIds = Array.from(new Set([...char1Ids, ...char2Ids]));
      const allEpisodes = await fetchEpisodes(allIds);

      const character1 = allEpisodes.filter((ep) => char1Ids.includes(ep.id));
      const character2 = allEpisodes.filter((ep) => char2Ids.includes(ep.id));

      setEpisodes({ character1, character2 });
    };

    fetchAllEpisodes();
  }, [
    episodes.character1,
    episodes.character2,
    character1Episode,
    character2Episode,
  ]);

  const sharedEpisodes =
    episodes.character1 && episodes.character2
      ? episodes.character1.filter((ep1) =>
          episodes.character2?.some((ep2) => ep2.id === ep1.id)
        )
      : null;

  return (
    <section className="fixed mx-4 rounded-t-4xl bottom-0 bg-zinc-700 left-0 right-0 h-auto max-h-1/4 overflow-y-scroll border-t-4 border-zinc-900 ">
      <div className="md:flex md:justify-between md:gap-4 p-2">
        <div className="w-full md:w-1/3">
          <EpisodesList
            title="Character 1 episodes"
            episodes={episodes.character1}
          />
        </div>
        <div className="w-full md:w-1/3">
          <EpisodesList title="Shared episodes" episodes={sharedEpisodes} />
        </div>
        <div className="w-full md:w-1/3">
          <EpisodesList
            title="Character 2 episodes"
            episodes={episodes.character2}
          />
        </div>
      </div>
    </section>
  );
};
export default Episodes;

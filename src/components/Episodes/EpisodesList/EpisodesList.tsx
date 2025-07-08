import { EpisodeType } from "@/types/episode";

interface EpisodesListProps {
  title: string;
  episodes: EpisodeType[] | null;
}

const EpisodesList = ({ title, episodes }: EpisodesListProps) => {
  return (
    <div>
      <h4>{title} </h4>

      {episodes && (
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>{episode.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EpisodesList;

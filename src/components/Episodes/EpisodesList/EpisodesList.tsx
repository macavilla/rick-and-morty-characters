import { EpisodeType } from "@/types/episode";

export interface EpisodesListProps {
  title: string;
  episodes: EpisodeType[] | null;
}

const EpisodesList = ({ title, episodes }: EpisodesListProps) => {
  return (
    <div className="px-4">
      <h4 className="text-2xl text-center">{title} </h4>

      {episodes && (
        <ul>
          {episodes.map((episode) => (
            <li className="my-3 list-disc list-inside" key={episode.id}>
              {episode.episode} - {episode.name} - {episode.air_date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EpisodesList;

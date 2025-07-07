import { CharacterType } from "@/types/character";

interface EpisodesProps {
  character1?: CharacterType;
  character2?: CharacterType;
}

const Episodes = ({ character1, character2 }: EpisodesProps) => {
  //   console.log("character1 :>> ", character1);
  //   console.log("character2 :>> ", character2);
  return (
    <div className="">
      <div className="">
        <h2>Character 1 Episodes</h2>
      </div>
      <div className="">
        <h2>Shared episodes</h2>
      </div>
      <div className="">
        <h2>Character 2 Episodes</h2>
      </div>
    </div>
  );
};

export default Episodes;

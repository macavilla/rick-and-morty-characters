// import Image from "next/image";

import { CharacterType } from "@/types/character";

interface CharacerCardProps {
  character: CharacterType;
  isSelected: boolean;
}

const CharacterCard = ({ character, isSelected }: CharacerCardProps) => {
  console.log(
    "CharacterCard character :>> ",
    character,
    " isSelected :>> ",
    isSelected
  );
  return (
    <div className="">
      <h4>{character.name}</h4>
      {/*<Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      /> */}
    </div>
  );
};

export default CharacterCard;

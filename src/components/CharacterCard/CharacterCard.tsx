import Image from "next/image";

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
    <div className="lg:flex hover:text-gray-500 gap-1 cursor-pointer">
      <div className="w-full lg:w-1/2">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <div className="lg:w-1/2">
        <h4 className="text-2xl">{character.name}</h4>
        <p>{character.status}</p>
        <p>{character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

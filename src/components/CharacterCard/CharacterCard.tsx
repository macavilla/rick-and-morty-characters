import Image from "next/image";

import { CharacterType } from "@/types/character";

interface CharacerCardProps {
  character: CharacterType;
  onSelect: () => void;
  isSelected: boolean;
  isDisabled?: boolean;
}

const CharacterCard = ({
  character,
  onSelect,
  isSelected,
  isDisabled,
}: CharacerCardProps) => {
  const handleClick = () => {
    if (!isDisabled) onSelect();
  };

  return (
    <div
      onClick={handleClick}
      className={`
      p-2 border rounded-md
      ${
        isDisabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer hover:text-gray-500"
      }
      ${isSelected ? "text-blue-500 font-bold" : ""}
    `}
    >
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

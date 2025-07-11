import Image from "next/image";

import { CharacterType, CharacterStatus } from "@/types/character";

export interface CharacerCardProps {
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
      p-2 border-2 rounded-3xl lg:flex lg:gap-3 
      ${
        isDisabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer hover:text-gray-500"
      }
      ${isSelected && "border-2 border-indigo-950 text-indigo-700 font-bold"}
    `}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            className="w-full h-auto  rounded-2xl"
          />
          <div className="flex items-center gap-2 absolute top-1 left-1 border-1 bg-foreground border-background text-background rounded-full py-0.5 px-1.5">
            <div
              aria-hidden={true}
              className={`rounded-full size-3  ${
                (character.status === CharacterStatus.alive &&
                  "bg-green-500") ||
                (character.status === CharacterStatus.dead && "bg-red-500") ||
                "bg-gray-500"
              }`}
            ></div>
            <p className="capitalize text-xs">{character.status}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 py-2  mt-2 lg:m-0 lg:p-0  lg:pl-3">
        <h4 className="text-xl lg:text-2xl mb-2">{character.name}</h4>
        <p className="italic text-lg">{character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

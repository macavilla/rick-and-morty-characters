import { CharacterType } from "@/types/character";

import CharacterCard from "../CharacterCard/CharacterCard";
export interface CharacterListProps {
  characters: CharacterType[];
  listId: 1 | 2;
  selectedCharacter: CharacterType | null;
  otherSelectedCharacter: CharacterType | null;
  onSelect: (c: CharacterType | null) => void;
}

const CharacterList = ({
  listId,
  characters,
  selectedCharacter,
  otherSelectedCharacter,
  onSelect,
}: CharacterListProps) => {
  return (
    <div className="">
      <h3 className="text-3xl text-center">Character #{listId}</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-3 rounded-4xl p-2 my-2 w-full">
        {characters?.map((character: CharacterType) => (
          <CharacterCard
            key={character.id}
            character={character}
            isSelected={character === selectedCharacter}
            isDisabled={character === otherSelectedCharacter}
            onSelect={() =>
              character !== selectedCharacter
                ? onSelect(character)
                : onSelect(null)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;

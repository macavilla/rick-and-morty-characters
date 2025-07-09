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
      <h3 className="text-2xl">Character #{listId}</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-4">
        {characters.map((character: CharacterType) => (
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

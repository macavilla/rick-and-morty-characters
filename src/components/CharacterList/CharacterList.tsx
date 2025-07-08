import { CharacterType } from "@/types/character";

import CharacterCard from "../CharacterCard/CharacterCard";
interface CharacterListProps {
  characters: CharacterType[];
  listId: 1 | 2;
  selectedCharacter: CharacterType["id"] | null;
  otherSelectedCharacter: CharacterType["id"] | null;
  onSelect: (c: CharacterType["id"]) => void;
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
            isSelected={character.id === selectedCharacter}
            isDisabled={character.id === otherSelectedCharacter}
            onSelect={() => onSelect(character.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;

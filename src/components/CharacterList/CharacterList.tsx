import { CharacterType } from "@/types/character";

import CharacterCard from "../CharacterCard/CharacterCard";
interface CharacterListProps {
  characters: CharacterType[];
  title: string;
  onSelect: (characterId: CharacterType["id"]) => void;
  selectedCharacter: CharacterType["id"] | null;
}

const CharacterList = ({
  characters,
  selectedCharacter,
  onSelect,
  title,
}: CharacterListProps) => {
  console.log("characters :>> ", characters);

  const handleSelectCharacter = (characterId: CharacterType["id"]) => {
    onSelect(characterId);
  };
  return (
    <div className="">
      <h3>{title}</h3>

      <ul>
        {characters.map((character: CharacterType) => (
          <div
            className=""
            key={character.id}
            onClick={() => handleSelectCharacter(character.id)}
          >
            <CharacterCard
              character={character}
              isSelected={character.id === selectedCharacter}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;

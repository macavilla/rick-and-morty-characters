"use client";

import { useState } from "react";
import { CharacterType } from "@/types/character";
import CharacterList from "../CharacterList/CharacterList";
// import Episodes from "../Episodes/Episodes";

interface DashboardProps {
  characters: CharacterType[];
}
const Dashboard = ({ characters }: DashboardProps) => {
  const [character1, setCharacter1] = useState<CharacterType["id"] | null>(
    null
  );
  const [character2, setCharacter2] = useState<CharacterType["id"] | null>(
    null
  );

  const handleSelectCharacter1 = (characterId: CharacterType["id"]) => {
    setCharacter1(characterId);
  };

  const handleSelectCharacter2 = (characterId: CharacterType["id"]) => {
    setCharacter2(characterId);
  };

  console.log("characters :>> ", characters);
  return (
    <div>
      <h2>Rick and Morty Characters List:</h2>

      <div className="flex justify-between w-full gap-1">
        <CharacterList
          title="Character #1"
          selectedCharacter={character1}
          onSelect={handleSelectCharacter1}
          characters={characters}
        />
        <CharacterList
          title="Character #2"
          selectedCharacter={character2}
          onSelect={handleSelectCharacter2}
          characters={characters}
        />
      </div>
      {/* <h2>Selected Characters Epi:</h2>

      <Episodes /> */}
    </div>
  );
};

export default Dashboard;

"use client";

import { useState } from "react";

import { CharacterType } from "@/types/character";

import CharacterList from "../CharacterList/CharacterList";
import Episodes from "../Episodes/Episodes";

interface DashboardProps {
  characters: CharacterType[];
}
const Dashboard = ({ characters }: DashboardProps) => {
  const [character1, setCharacter1] = useState<CharacterType | null>(null);
  const [character2, setCharacter2] = useState<CharacterType | null>(null);

  const handleResetSelection = () => {
    setCharacter1(null);
    setCharacter2(null);
  };

  return (
    <div>
      <h2>Rick and Morty Characters List:</h2>

      <button
        className="cursor-pointer bg-red-300"
        onClick={handleResetSelection}
      >
        Reset selection
      </button>
      <div className="flex justify-between w-full gap-1">
        <CharacterList
          listId={1}
          characters={characters}
          selectedCharacter={character1}
          otherSelectedCharacter={character2}
          onSelect={setCharacter1}
        />
        <CharacterList
          listId={2}
          characters={characters}
          selectedCharacter={character2}
          otherSelectedCharacter={character1}
          onSelect={setCharacter2}
        />
      </div>
      <h2>Selected Characters Epi:</h2>

      <Episodes
        character1Episode={character1?.episode || null}
        character2Episode={character2?.episode || null}
      />
    </div>
  );
};

export default Dashboard;

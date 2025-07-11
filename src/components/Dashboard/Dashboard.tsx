"use client";

import { useState } from "react";

import { CharacterType } from "@/types/character";

import CharacterList from "../CharacterList/CharacterList";
import Episodes from "../Episodes/Episodes";

export interface DashboardProps {
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
      <button
        disabled={!character1 && !character2}
        className="cursor-pointer border rounded-full px-4 py-1 disabled:opacity-50"
        onClick={handleResetSelection}
      >
        Reset selection
      </button>
      <section className="flex justify-between w-full gap-1 mb-52">
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
      </section>

      <Episodes
        characterName1={character1?.name || ""}
        characterName2={character2?.name || ""}
        character1Episode={character1?.episode || null}
        character2Episode={character2?.episode || null}
      />
    </div>
  );
};

export default Dashboard;

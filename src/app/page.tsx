import { CharacterType } from "@/types/character";

import Dashboard from "@/components/Dashboard/Dashboard";

const getResponse = async (): Promise<{
  allCharacters: CharacterType[];
  paginationInfo: object;
}> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const response = await res.json();

  return { allCharacters: response.results, paginationInfo: response.info };
};
export default async function Home() {
  const { allCharacters } = await getResponse();

  // console.log("characters :>> ", characters);

  return (
    <div className="min-h-screen p-8   sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="text-3xl font-bold">Rick and Morty Characters</h1>

        <Dashboard characters={allCharacters} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

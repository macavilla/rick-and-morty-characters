import { CharacterType } from "@/types/character";
import { PaginationType } from "@/types/pagination";

import Dashboard from "@/components/Dashboard/Dashboard";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const getResponse = async (
  page: string | string[] | undefined
): Promise<{
  allCharacters: CharacterType[];
  paginationInfo: PaginationType;
}> => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page && page}`
  );
  const response = await res.json();

  return { allCharacters: response.results, paginationInfo: response.info };
};
export default async function Home({ searchParams }: HomeProps) {
  const page = (await searchParams).page;

  const { allCharacters, paginationInfo } = await getResponse(page);

  return (
    <div className="min-h-screen p-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="text-3xl font-bold">Rick and Morty Characters</h1>

        {paginationInfo && (
          <Pagination paginationInfo={{ ...paginationInfo }} />
        )}
        {allCharacters ? (
          <Dashboard characters={allCharacters} />
        ) : (
          <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl">Characters not found</h2>
            <Link href="/">Try again</Link>
          </div>
        )}
      </main>
    </div>
  );
}

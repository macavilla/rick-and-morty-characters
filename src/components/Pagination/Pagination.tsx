import Link from "next/link";

import getParams from "@/utils/getParams";

import { PaginationType } from "@/types/pagination";

export interface PaginationProps {
  paginationInfo: PaginationType;
}

const Pagination = ({ paginationInfo }: PaginationProps) => {
  const { prev, next } = paginationInfo || {};

  const params =
    prev || next
      ? {
          prev: prev ? getParams(prev) : "",
          next: next ? getParams(next) : "",
        }
      : {};
  return (
    <nav className="fixed bottom-1/2 w-full left-0 z-10">
      {params && (
        <ul className="w-full flex px-2">
          {params.prev && (
            <li className="mr-auto text-xl transition duration-300 ease-in-out hover:bg-indigo-800 size-10 rounded-full bg-indigo-500 p-2 flex justify-center items-center">
              <Link aria-description="Go to previous page" href={params.prev}>
                {"<<"}
              </Link>
            </li>
          )}
          {params.next && (
            <li className="ml-auto text-xl transition duration-300 ease-in-out hover:bg-indigo-800 size-10 rounded-full bg-indigo-500 p-2 flex justify-center items-center">
              <Link aria-description="Go to next page" href={params.next}>
                {">>"}
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;

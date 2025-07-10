import Link from "next/link";

import getParams from "@/utils/getParams";

import { PaginationType } from "@/types/pagination";

export interface PaginationProps {
  paginationInfo: PaginationType;
}

const Pagination = ({ paginationInfo }: PaginationProps) => {
  const { prev, next, count, pages } = paginationInfo || {};

  const params =
    prev || next
      ? {
          prev: prev ? getParams(prev) : "",
          next: next ? getParams(next) : "",
        }
      : {};
  return (
    <nav>
      {params && (
        <ul className="w-full flex">
          {params.prev && (
            <li className="mr-auto">
              <Link aria-description="Go to previous page" href={params.prev}>
                {"<<"}
              </Link>
            </li>
          )}
          {params.next && (
            <li className="ml-auto">
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

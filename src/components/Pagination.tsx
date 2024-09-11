import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";

interface PaginationProps {
  adsPerPage: number;
  totalAds: number;
  paginate: (number: number) => void;
}
export const Pagination = ({
  adsPerPage: adsPerPage,
  totalAds: totalAds,
  paginate,
}: PaginationProps) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalAds / adsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* <nav>
        <ul>
          {pageNumber.map((number) => (
            <li key={number}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </nav> */}

      <DigiNavigationPagination
        afTotalPages={pageNumbers.length}
        afInitActivePage={1}
        onAfOnPageChange={() => paginate(2)}
        //afMSetCurrentPage={(pageNumber: number) => paginate(pageNumber)}
      ></DigiNavigationPagination>
    </>
  );
};

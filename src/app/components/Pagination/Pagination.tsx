import { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

const DEFAULT_PAGE_CLASSNAME = "text-xs";
const DEFAULT_PAGE_LINK_CLASSNAME =
  "px-3 py-2 rounded-lg bg-gray-base dark:bg-purple-deep hover:bg-purple-base hover:text-white dark:hover:bg-purple-base dark:hover:text-white transition-colors";
const DEFAULT_DISABLED_LINK_CLASSNAME = "px-2 py-2";
const DEFAULT_DISABLED_NAV_LINK_CLASSNAME = "opacity-50 pointer-events-none";

interface Props {
  page: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  setPage: (value: number) => void;
}

export const Pagination: FC<Props> = ({
  page,
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
  setPage,
}) => {
  const currentPage = page - 1;

  const onPageChange: ReactPaginateProps["onPageChange"] = ({ selected }) =>
    setPage(selected + 1);

  return (
    <ReactPaginate
      containerClassName="flex justify-center items-center gap-2 my-4"
      pageClassName={DEFAULT_PAGE_CLASSNAME}
      pageLinkClassName={DEFAULT_PAGE_LINK_CLASSNAME}
      breakClassName={DEFAULT_PAGE_CLASSNAME}
      breakLinkClassName={DEFAULT_PAGE_LINK_CLASSNAME}
      activeLinkClassName="bg-purple-base dark:bg-purple-base text-white"
      previousLinkClassName={DEFAULT_DISABLED_LINK_CLASSNAME}
      nextLinkClassName={DEFAULT_DISABLED_LINK_CLASSNAME}
      disabledLinkClassName={DEFAULT_DISABLED_NAV_LINK_CLASSNAME}
      initialPage={currentPage}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      previousLabel={"Previous"}
      nextLabel={"Next"}
    />
  );
};

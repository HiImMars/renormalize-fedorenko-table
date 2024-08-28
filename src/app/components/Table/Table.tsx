"use client";

import cn from "classnames";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { QUERY_PARAMS_KEYS } from "@/app/constants/queryParams";
import { Pagination } from "../Pagination/Pagination";
import { Statuses } from "@/app/types/status";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TableArrow } from "./TableArrow";

interface DataItem {
  "Tracking ID": number;
  "Product Image": string;
  "Product Name": string;
  Customer: string;
  Date: string;
  Amount: number;
  "Payment Mode": string;
  Status: string;
}

interface Props {
  initialData: DataItem[];
}

const DEFAULT_LABEL_CLASSNAME =
  "text-xs text-center font-medium rounded-3xl px-2 py-1";

export default function DataTable({ initialData }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const entries = Number(searchParams.get(QUERY_PARAMS_KEYS.ENTRIES)) || 10;
  const searchQuery = searchParams.get(QUERY_PARAMS_KEYS.SEARCH_QUERY) || "";

  const currentPage = Number(searchParams.get(QUERY_PARAMS_KEYS.PAGE)) || 1;
  const [page, setPage] = useState(currentPage);

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(data);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(QUERY_PARAMS_KEYS.PAGE, newPage.toString());
    setPage(newPage);
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const filtered = initialData?.filter((item) =>
      item["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);

    if (searchQuery) handlePageChange(1);
  }, [searchQuery, initialData]);

  const totalPages = Math.ceil(filteredData.length / entries);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * entries,
    currentPage * entries
  );

  const handleDelete = (trackingID: number) => {
    const newData = data.filter((item) => item["Tracking ID"] !== trackingID);
    setData(newData);
    setFilteredData(newData);
  };

  return (
    <>
      <table className="w-full mx-auto max-w-screen-xl">
        <thead>
          <tr>
            <th className="px-2">Tracking ID</th>
            <th className="text-left relative">
              Product
              <TableArrow />
            </th>
            <th className="px-2 text-left relative">
              Customer
              <TableArrow />
            </th>
            <th className="px-2 text-left relative">
              Date
              <TableArrow />
            </th>
            <th className="px-2 text-left">Amount</th>
            <th className="px-2 text-left">Payment Mode</th>
            <th className="px-2 text-left relative">
              Status
              <TableArrow />
            </th>
            <th className="px-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr
              key={item["Tracking ID"]}
              className="odd:bg-purple-light dark:odd:bg-purple-medium"
            >
              <td className="p-4 text-center max-w-30 min-h-24">
                #{item["Tracking ID"]}
              </td>
              <td className="py-4 min-h-24">
                <div className="max-w-50 flex items-center gap-2">
                  <img
                    src={item["Product Image"]}
                    alt={item["Product Name"]}
                    className="w-8 h-8 rounded-lg shrink-0"
                  />
                  <p title={item["Product Name"]}>{item["Product Name"]}</p>
                </div>
              </td>
              <td className="px-2 py-4 max-w-30 min-h-24">{item.Customer}</td>
              <td className="px-2 py-4 max-w-30 min-h-24">{item.Date}</td>
              <td className="px-2 py-4 max-w-30 min-h-24">{item.Amount}</td>
              <td className="px-2 py-4 max-w-30 min-h-24">
                {item["Payment Mode"]}
              </td>
              <td className="pl-2 pr-5 py-4 max-w-30 min-h-24">
                <div
                  className={cn(DEFAULT_LABEL_CLASSNAME, {
                    "bg-red-light text-red-base":
                      item.Status === Statuses.CANCELED,
                    "bg-green-light text-green-base":
                      item.Status === Statuses.DELIVERED,
                    "bg-orange-light text-orange-base":
                      item.Status === Statuses.PROCESS,
                  })}
                >
                  {item.Status}
                </div>
              </td>
              <td className="px-2 py-4 max-w-30 min-h-24 flex items-center gap-2">
                <FiEdit className="w-6 h-6 stroke-purple-base cursor-pointer hover:scale-125 transition-transform duration-300" />
                <RiDeleteBinLine
                  onClick={() => handleDelete(item["Tracking ID"])}
                  className="w-6 h-6 fill-red-dark cursor-pointer hover:scale-125 transition-transform duration-300"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        page={page}
        pageCount={totalPages}
        setPage={handlePageChange}
      />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { QUERY_PARAMS_KEYS } from "@/app/constants/queryParams";
import { Pagination } from "../Pagination/Pagination";

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
    <div>
      <table>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item["Tracking ID"]}>
              <td>{item["Tracking ID"]}</td>
              <td>
                <img
                  src={item["Product Image"]}
                  alt={item["Product Name"]}
                  width={40}
                />
                <span>{item["Product Name"]}</span>
              </td>
              <td>{item.Customer}</td>
              <td>{item.Date}</td>
              <td>{item.Amount}</td>
              <td>{item["Payment Mode"]}</td>
              <td>{item.Status}</td>
              <td>
                <button onClick={() => handleDelete(item["Tracking ID"])}>
                  Delete
                </button>
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
    </div>
  );
}

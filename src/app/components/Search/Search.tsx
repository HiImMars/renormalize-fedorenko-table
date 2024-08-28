"use client";

import { useState } from "react";
import { QUERY_PARAMS_KEYS } from "@/app/constants/queryParams";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentQuery = searchParams.get(QUERY_PARAMS_KEYS.SEARCH_QUERY) || "";
  const [searchQuery, setSearchQuery] = useState(currentQuery);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = event.target.value;
    setSearchQuery(query);

    const params = new URLSearchParams(searchParams);

    if (query.trim() === "") {
      params.delete(QUERY_PARAMS_KEYS.SEARCH_QUERY);
    } else {
      params.set(QUERY_PARAMS_KEYS.SEARCH_QUERY, query);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative">
      <input
        value={searchQuery}
        placeholder="Search..."
        onChange={handleChange}
        className="pl-7 pr-2 py-1 rounded-lg border border-gray-dark placeholder:text-gray-dark dark:text-white dark:border-white dark:placeholder:text-white dark:bg-inherit"
      />
      <CiSearch className="w-4 h-4 absolute top-[6px] left-2 fill-gray-dark stroke-1 stroke-gray-dark dark:fill-white dark:stroke-white" />
    </div>
  );
}

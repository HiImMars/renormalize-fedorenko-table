"use client";

import { QUERY_PARAMS_KEYS } from "@/app/constants/queryParams";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
// import { useDebounceCallback } from "usehooks-ts";

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

  //   const debounceHandleChange = useDebounceCallback(handleChange, 1000);
  //=====================================

  //   const updateURLWithQuery = (query: string) => {
  //     const params = new URLSearchParams(searchParams);

  //     if (query.trim() === "") {
  //       params.delete(QUERY_PARAMS_KEYS.SEARCH_QUERY);
  //     } else {
  //       params.set(QUERY_PARAMS_KEYS.SEARCH_QUERY, query);
  //     }

  //     router.push(`${pathname}?${params.toString()}`);
  //   };

  //   const debounceUpdateURL = useDebounceCallback(updateURLWithQuery, 1000);

  //   const handleChange = (
  //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const query = event.target.value;
  //     setSearchQuery(query);

  //     debounceUpdateURL(query);
  //   };

  return (
    <input value={searchQuery} placeholder="Search" onChange={handleChange} />
  );
}

"use client";

import { QUERY_PARAMS_KEYS } from "@/app/constants/queryParams";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const entriesOptions = [
  { value: 10, id: 1 },
  { value: 25, id: 2 },
  { value: 50, id: 3 },
];

export default function EntriesSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentValue =
    searchParams.get(QUERY_PARAMS_KEYS.ENTRIES) || entriesOptions[0].value;
  const [selectedValue, setSelectedValue] = useState(currentValue);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(Number(newValue));

    const params = new URLSearchParams(searchParams);
    params.set(QUERY_PARAMS_KEYS.ENTRIES, newValue);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select value={selectedValue} onChange={handleSelect}>
      {Boolean(entriesOptions?.length) &&
        entriesOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
    </select>
  );
}

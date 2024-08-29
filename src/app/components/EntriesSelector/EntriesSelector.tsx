"use client";

import { Suspense, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { QUERY_PARAMS_KEYS } from "@/app/constants/queryParams";

const entriesOptions = [
  { value: 10, id: 1 },
  { value: 25, id: 2 },
  { value: 50, id: 3 },
];

function EntriesSelector() {
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
    <select
      value={selectedValue}
      onChange={handleSelect}
      className="p-1 rounded-lg bg-gray-base dark:bg-purple-deep"
    >
      {Boolean(entriesOptions?.length) &&
        entriesOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
    </select>
  );
}

export function EntriesSelectorWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EntriesSelector />
    </Suspense>
  );
}

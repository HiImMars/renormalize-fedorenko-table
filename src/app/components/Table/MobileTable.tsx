"use client";

import cn from "classnames";
import { Statuses } from "@/app/types/status";
import { DataItem, DEFAULT_LABEL_CLASSNAME } from "./Table";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
  paginatedData: DataItem[];
  handleDelete: (trackingID: number) => void;
}

export default function MobileTable({ paginatedData, handleDelete }: Props) {
  return (
    <div className="lg:hidden w-full mx-auto max-w-screen-xl">
      {paginatedData.map((item) => (
        <div
          key={item["Tracking ID"]}
          className="odd:bg-purple-light dark:odd:bg-purple-medium mb-4 p-4 rounded-lg shadow-md"
        >
          <div className="flex justify-between">
            <span className="font-semibold">Tracking ID:</span>#
            {item["Tracking ID"]}
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={item["Product Image"]}
              alt={item["Product Name"]}
              className="w-24 h-24 rounded-lg shrink-0"
            />
            <p className="mt-2" title={item["Product Name"]}>
              {item["Product Name"]}
            </p>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="font-semibold">Customer:</span> {item.Customer}
          </div>
          <div className="mt-2 flex justify-between">
            <span className="font-semibold">Date:</span> {item.Date}
          </div>
          <div className="mt-2 flex justify-between">
            <span className="font-semibold">Amount:</span> {item.Amount}
          </div>
          <div className="mt-2 flex justify-between">
            <span className="font-semibold">Payment Mode:</span>{" "}
            {item["Payment Mode"]}
          </div>
          <div className="mt-2 flex justify-between">
            <span className="font-semibold">Status:</span>
            <div
              className={cn(DEFAULT_LABEL_CLASSNAME, {
                "bg-red-light text-red-base": item.Status === Statuses.CANCELED,
                "bg-green-light text-green-base":
                  item.Status === Statuses.DELIVERED,
                "bg-orange-light text-orange-base":
                  item.Status === Statuses.PROCESS,
              })}
            >
              {item.Status}
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <FiEdit className="w-6 h-6 stroke-purple-base cursor-pointer hover:scale-125 transition-transform duration-300" />
            <RiDeleteBinLine
              onClick={() => handleDelete(item["Tracking ID"])}
              className="w-6 h-6 fill-red-dark cursor-pointer hover:scale-125 transition-transform duration-300 ml-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

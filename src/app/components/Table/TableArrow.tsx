import { BiSolidDownArrow } from "react-icons/bi";

export const TableArrow = () => {
  return (
    <div className="flex flex-col items-center justify-center absolute top-1 right-4">
      <BiSolidDownArrow className="rotate-180 w-2 h-2 -mb-px fill-gray-dark" />
      <BiSolidDownArrow className="w-2 h-2 fill-gray-dark" />
    </div>
  );
};

import { EntriesSelectorWrapper } from "../EntriesSelector/EntriesSelector";
import { Searchbar } from "../Search/Search";
import ThemeSwitch from "../ThemeSwitcher/ThemeSwitcher";
import { GoPlus } from "react-icons/go";

export default function Header() {
  return (
    <header className="p-4 flex flex-col lg:items-center justify-between gap-3 lg:flex-row">
      <div className="flex flex-col lg:items-center gap-5 lg:flex-row">
        <div className="flex items-center gap-3">
          Show
          <EntriesSelectorWrapper />
          entries
        </div>
        <Searchbar />
      </div>
      <div className="flex justify-between lg:justify-center items-center gap-3">
        <div className="relative">
          <button className="bg-purple-base text-white font-bold text-xs py-2 pl-8 pr-3 rounded-lg hover:bg-opacity-90 focus:bg-opacity-90 transition-opacity">
            Add Customer
          </button>
          <GoPlus className="absolute top-2 left-3 w-4 h-4 fill-white stroke-1 stroke-white cursor-pointer" />
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}

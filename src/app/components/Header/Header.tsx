import EntriesSelector from "../EntriesSelector/EntriesSelector";
import Search from "../Search/Search";
import ThemeSwitch from "../ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          Show
          <EntriesSelector />
          entries
        </div>
        <Search />
      </div>
      <div className="flex items-center gap-3">
        <button>Add cu</button>
        <ThemeSwitch />
      </div>
    </header>
  );
}

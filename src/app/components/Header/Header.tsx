import EntriesSelector from "../EntriesSelector/EntriesSelector";
import Search from "../Search/Search";
import ThemeSwitch from "../ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <div>
      <EntriesSelector />
      <ThemeSwitch />
      <Search />
    </div>
  );
}

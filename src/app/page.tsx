import { promises as fs } from "fs";
import Header from "./components/Header/Header";
import { DataTableWrapper } from "./components/Table/Table";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main>
      <Header />
      <section>
        <DataTableWrapper initialData={data} />
      </section>
    </main>
  );
}

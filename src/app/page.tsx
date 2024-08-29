import Header from "./components/Header/Header";
import DataTable from "./components/Table/Table";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  console.log(data);

  return (
    <main>
      <Header />
      <section>
        <DataTable initialData={data} />
      </section>
    </main>
  );
}

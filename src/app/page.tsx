import Header from "./components/Header/Header";
import DataTable from "./components/Table/Table";
import { getData } from "./services/getData";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Header />
      <section>
        <DataTable initialData={data} />
      </section>
    </main>
  );
}

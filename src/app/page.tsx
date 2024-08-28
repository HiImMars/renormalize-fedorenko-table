import Header from "./components/Header/Header";
import DataTable from "./components/Table/Table";
import { getData } from "./services/getData";

// interface SearchParams {
//   entries: string;
//   searchQuery: string;
//   page: string;
// }

// interface Props {
//   searchParams: SearchParams;
// }

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <main>
      <Header />
      <DataTable initialData={data} />
    </main>
  );
}

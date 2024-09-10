import { Navbar } from "./components/navbar";
import { Table } from "./components/table";
import { EmptyData } from "./components/empty-data";
import { useGetFixtures } from "./features/fixutres/api/use-get-fixtures";
import { Footer } from "./components/footer";

// import { useParams } from "react-router-dom";

function App() {
  // const params = useParams();
  const mainLeaguesQuery = useGetFixtures();
  // params.onlyMainLeagues ? false : true
  const data = mainLeaguesQuery.data;

  // const data: Game[] = [fixtures];

  return (
    <div className="min-h-[100vh] w-full">
      <Navbar />
      <div className="mx-auto my-4 md:my-6 max-w-[400px] md:max-w-[1160px] grid-cols-1 gap-3 p-2 md:p-4 border border-slate-300 rounded-lg text-black">
        <h2 className="pt-2 md:pt-4 font-bold text-xl md:text-2xl text-slate-950">
          Bem vindo ao Jogo de hoje.
        </h2>
        <p className="py-2 md:py-4 text-base font-normal text-slate-600">
          Aqui voce encontra estatísticas, dados de jogos em tempo real e muito
          mais para fazer suas análises e acompanhar seu time do coração.
        </p>
      </div>
      {data?.length == 0 || !data ? <EmptyData /> : <Table data={data} />}
      <Footer />
    </div>
  );
}

export default App;

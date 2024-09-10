import { useParams } from "react-router-dom";
import { Navbar } from "./navbar";
import type { Fixture } from "../lib/entities/statistics";
import { EmptyData } from "./empty-data";
import { useGetStats } from "../features/stats/api/use-get-stats";
import { Footer } from "./footer";
// import { fixtureData } from "../lib/data-test";

function Fixture() {
  // const [data, setDate] = useState<Fixture[] | null>(null);
  const params = useParams();

  const statsQuery = useGetStats(params.matchId ?? "");
  const data = statsQuery.data;

  // const data: Fixture[] = [];

  return (
    <>
      <Navbar />
      {!data || data.length == 0 ? (
        <EmptyData stats />
      ) : (
        <div className="max-w-[1160px] px-6 py-4 mx-auto flex flex-col items-center">
          <div className="flex flex-col bg-slate-300/30 rounded-xl gap-4 p-4 items-center justify-center w-full">
            <div className="flex flex-col items-center w-[90%] mx-auto">
              <div className="w-full flex items-center justify-between mb-6">
                <div className="flex flex-col items-center gap-2 mb-2">
                  <img
                    src={data[0].team.logo}
                    className="w-[30%] md:w-[50%] object-cover"
                    alt={data[0].team.name}
                  />
                  <div className="text-base font-semibold">
                    {data[0].team.name}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 mb-2">
                  <img
                    src={data[1].team.logo}
                    className="w-[30%] md:w-[50%] object-cover"
                    alt={data[1].team.name}
                  />
                  <div className="text-base font-semibold">
                    {data[1].team.name}
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold bg-slate-800 text-slate-300 mb-6 w-full text-center">
                Estatísticas
              </div>
              <div className="w-[100%] flex items-center justify-between">
                <div className="flex-1 flex flex-col items-center gap-3">
                  {data[0].statistics.map((stats) => (
                    <span key={stats.type}>{stats.value ?? 0}</span>
                  ))}
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  {data[0].statistics.map((stats) => (
                    <span className="font-semibold" key={stats.type}>
                      {stats.type}
                    </span>
                  ))}
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  {data[1].statistics.map((stats) => (
                    <span key={stats.type}>{stats.value ?? 0}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Fixture;

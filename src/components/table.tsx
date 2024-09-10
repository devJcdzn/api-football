import { Link } from "react-router-dom";
import type { Game } from "../lib/entities/game-stats";

export const Table = ({ data }: { data: Game[] }) => {
  return (
    <div className="mx-auto mb-10 max-w-[1160px] grid-cols-1 gap-4 divide-y text-black">
      {data.map((item) => {
        return (
          <div
            key={item.fixture.id}
            className="py-4 md:py-6 px-6 mb-[1px] flex flex-col gap-3"
          >
            <div className="flex flex-col items-center">
              <h2 className={`text-lg md:text-2xl font-bold`}>
                {item.league.name}
              </h2>
              <span className="text-lg font-medium">{item.league.country}</span>
            </div>
            <Link to={`/fixture/${item.fixture.id}`} key={item.fixture.id}>
              <div className="flex flex-col bg-slate-300/30 rounded-xl gap-4 p-4 items-center justify-center w-full">
                <div className="text-emerald-600 font-medium animate-pulse">
                  {item.fixture.status.elapsed}
                </div>
                <div className="flex items-center justify-between w-[90%] mx-auto">
                  <img
                    src={item.teams.home.logo}
                    className="w-[12%] md:w-[8%] object-cover"
                    alt={item.teams.home.name}
                  />
                  <div className="w-[32%] text-right text-sm md:text-lg font-semibold">
                    {item.teams.home.name}
                  </div>

                  <div className="w-[16%] text-center text-sm md:text-lg font-semibold">
                    {item.goals.home} : {item.goals.away}
                  </div>

                  <div className="w-[32%] text-left text-sm md:text-lg font-semibold">
                    {item.teams.away.name}
                  </div>
                  <img
                    src={item.teams.away.logo}
                    className="w-[12%] md:w-[8%] object-cover"
                    alt={item.teams.away.name}
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

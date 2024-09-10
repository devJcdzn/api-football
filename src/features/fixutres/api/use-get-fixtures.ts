import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import type { Game } from "../../../lib/entities/game-stats";
import { mainLeagues } from "../../../lib/data-test";

export const useGetFixtures = (onlyMainLeagues: boolean = false) => {
  const query = useQuery({
    queryKey: ["fixtures", onlyMainLeagues],
    queryFn: async () => {
      const { data } = await api.get<{ response: Game[] }>(
        `/fixtures?live=all${
          onlyMainLeagues
            ? `&league=${mainLeagues.map((league) => league.value).join(",")}`
            : ""
        }`
      );

      console.log(data);

      return data.response;
    },
    staleTime: 60000, // 1 minute
    refetchInterval: 60000, // 1 minute
  });

  return query;
};

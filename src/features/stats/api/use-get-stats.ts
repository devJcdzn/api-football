import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/api";
import type { Fixture } from "../../../lib/entities/statistics";

export const useGetStats = (matchId: string) => {
  const query = useQuery({
    queryKey: ["stats", matchId],
    queryFn: async () => {
      const { data } = await api.get<{ response: Fixture[] }>(
        `/fixtures/statistics?fixture=${matchId}`
      );

      console.log(data);

      return data.response;
    },
    staleTime: 60000, // 1 minute
    refetchInterval: 60000, // 1 minute
  });

  return query;
};

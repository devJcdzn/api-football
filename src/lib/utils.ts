interface Team {
  Nm: string; // Nome do time
  ID: string; // ID do time
  Img: string; // URL da imagem do time
  Abr: string; // Abreviação do nome do time
  tbd: number; // Indica se o time é virtual
  Gd: number; // Gênero do time
  Pids: any[]; // IDs de jogadores associados ao time
  CoNm: string; // Nome do país do time
  CoId: string; // ID do país do time
  HasVideo: boolean; // Indica se há vídeo disponível para o time
}

interface Event {
  Eid: string; // ID do evento/jogo
  T1: Team[]; // Time 1 (casa)
  T2: Team[]; // Time 2 (fora)
  Tr1: string; // Pontuação do Time 1
  Tr2: string; // Pontuação do Time 2
  Trh1?: string; // Pontuação no primeiro tempo do Time 1
  Trh2?: string; // Pontuação no primeiro tempo do Time 2
  Eps: string; // Status do evento
  Esid: number; // ID do status do evento
  Esd: string; // Data de início do evento
  [key: string]: any; // Outros campos que podem existir
}

export interface Stage {
  Sid: string; // ID da fase
  Snm: string; // Nome da fase
  Scd: string; // Código da fase
  badgeUrl: string; // URL do badge
  firstColor: string; // Cor primária
  Cid: string; // ID do país
  Cnm: string; // Nome do país
  CnmT: string; // Nome do país em formato título
  Csnm: string; // Nome curto do país
  Ccd: string; // Código do país
  CompId: string; // ID da competição
  CompN: string; // Nome da competição
  CompD: string; // Descrição da competição
  CompST: string; // Subtítulo da competição
  Scu: number; // Indica se é uma copa
  Sds: string; // Nome curto da fase
  Chi: number; // Indicador de fase oculta
  Shi: number; // Indicador de estágio oculto
  Ccdiso: string; // Código ISO do país
  Sdn: string; // Nome do estágio
  Feed: any; // Feed de eventos
  Events: Event[]; // Feed de eventos
}

type Match = {
  matchStartDate: string;
  matchStatus: string;
  eventId: string;
  homeTeam: {
    name: string;
    id: string;
    badge: string;
    goals: string;
  };
  awayTeam: {
    name: string;
    id: string;
    badge: string;
    goals: string;
  };
};

type Fixture = {
  competitionId: string;
  competitionName: string;
  leagueColor: string;
  countryName: string;
  matches: Match[];
};

export const extractFixtureData = (stage: Stage) => {
  const gameDetails: Partial<Fixture> = {};

  // Extraindo dados da competição
  gameDetails.competitionId = stage.Sid;
  gameDetails.competitionName = stage.Snm;
  gameDetails.countryName = stage.Cnm;
  gameDetails.leagueColor = stage.firstColor;

  gameDetails.matches = [];

  stage.Events.forEach((event) => {
    gameDetails.matches?.push({
      eventId: event?.Eid,
      matchStartDate: event?.Esd,
      matchStatus: event?.Eps,
      homeTeam: {
        name: event.T1[0].Nm,
        id: event.T1[0].ID,
        badge: event.T1[0].Img,
        goals: event.Tr1,
      },
      awayTeam: {
        name: event.T2[0].Nm,
        id: event.T2[0].ID,
        badge: event.T2[0].Img,
        goals: event.Tr2,
      },
    });
  });

  console.log(stage.Events);

  return gameDetails;
};

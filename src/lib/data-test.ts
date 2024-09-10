export const fixtureData = {
  get: "fixtures/statistics",
  parameters: {
    fixture: "1234227",
  },
  errors: [],
  results: 2,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      team: {
        id: 1138,
        name: "America de Cali",
        logo: "https://media.api-sports.io/football/teams/1138.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 6,
        },
        {
          type: "Shots off Goal",
          value: 7,
        },
        {
          type: "Total Shots",
          value: 16,
        },
        {
          type: "Blocked Shots",
          value: 3,
        },
        {
          type: "Shots insidebox",
          value: 12,
        },
        {
          type: "Shots outsidebox",
          value: 4,
        },
        {
          type: "Fouls",
          value: 14,
        },
        {
          type: "Corner Kicks",
          value: 2,
        },
        {
          type: "Offsides",
          value: 5,
        },
        {
          type: "Ball Possession",
          value: "69%",
        },
        {
          type: "Yellow Cards",
          value: 3,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 1,
        },
        {
          type: "Total passes",
          value: 551,
        },
        {
          type: "Passes accurate",
          value: 467,
        },
        {
          type: "Passes %",
          value: "85%",
        },
        {
          type: "expected_goals",
          value: null,
        },
        {
          type: "goals_prevented",
          value: null,
        },
      ],
    },
    {
      team: {
        id: 1133,
        name: "Jaguares",
        logo: "https://media.api-sports.io/football/teams/1133.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 1,
        },
        {
          type: "Shots off Goal",
          value: 1,
        },
        {
          type: "Total Shots",
          value: 2,
        },
        {
          type: "Blocked Shots",
          value: 0,
        },
        {
          type: "Shots insidebox",
          value: 1,
        },
        {
          type: "Shots outsidebox",
          value: 1,
        },
        {
          type: "Fouls",
          value: 11,
        },
        {
          type: "Corner Kicks",
          value: 0,
        },
        {
          type: "Offsides",
          value: 0,
        },
        {
          type: "Ball Possession",
          value: "31%",
        },
        {
          type: "Yellow Cards",
          value: 3,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 5,
        },
        {
          type: "Total passes",
          value: 250,
        },
        {
          type: "Passes accurate",
          value: 167,
        },
        {
          type: "Passes %",
          value: "67%",
        },
        {
          type: "expected_goals",
          value: null,
        },
        {
          type: "goals_prevented",
          value: null,
        },
      ],
    },
  ],
};

export const fixtures = {
  fixture: {
    id: 1211969,
    referee: null,
    timezone: "UTC",
    date: "2024-09-09T09:00:00+00:00",
    timestamp: 1725872400,
    periods: {
      first: 1725872400,
      second: null,
    },
    venue: {
      id: 5712,
      name: "Yangon United Sport Complex",
      city: "Yangon",
    },
    status: {
      long: "First Half",
      short: "1H",
      elapsed: 22,
    },
  },
  league: {
    id: 588,
    name: "National League",
    country: "Myanmar",
    logo: "https://media.api-sports.io/football/leagues/588.png",
    flag: "https://media.api-sports.io/flags/mm.svg",
    season: 2024,
    round: "Regular Season - 9",
  },
  teams: {
    home: {
      id: 12527,
      name: "Rakhine United",
      logo: "https://media.api-sports.io/football/teams/12527.png",
      winner: false,
    },
    away: {
      id: 12532,
      name: "Dagon",
      logo: "https://media.api-sports.io/football/teams/12532.png",
      winner: true,
    },
  },
  goals: {
    home: 0,
    away: 1,
  },
  score: {
    halftime: {
      home: 0,
      away: 1,
    },
    fulltime: {
      home: null,
      away: null,
    },
    extratime: {
      home: null,
      away: null,
    },
    penalty: {
      home: null,
      away: null,
    },
  },
  events: [],
};

export const mainLeagues = [
  {
    name: "Premier League",
    value: 39,
  },
  {
    name: "La Liga",
    value: 140,
  },
  {
    name: "Seria A",
    value: 135,
  },
  {
    name: "Bundesliga",
    value: 78,
  },
  {
    name: "Ligue One",
    value: 61,
  },
  {
    name: "Brasileirão",
    value: 71,
  },
];

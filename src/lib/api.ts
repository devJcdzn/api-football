import axios from "axios";

export const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-apisports-key": "9255a71b5b5dda87159cf91bc84c933c",
  },
});

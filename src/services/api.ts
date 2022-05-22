import axios from "axios";

export const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": process.env.REACT_APP_FOOTBALL_KEY,
  },
});

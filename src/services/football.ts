import { api } from "./api";

export async function getStatus() {
  const resp = await api.get("/teams/statistics", {
    params: { season: 2019, team: 33, league: 39 },
  });
  console.log("resp", resp);
  return resp;
}

export async function getTeams() {
  try {
    const { data } = await api.get("/teams?league=2&season=2019");
    const teams = data.response.slice(0, 6);
    return teams.map(team => team.team);
  } catch (error) {
    console.error(error.message);
  }

  return null;
}

export async function getLeague() {
  const resp = await api.get("/leagues");

  return resp;
}

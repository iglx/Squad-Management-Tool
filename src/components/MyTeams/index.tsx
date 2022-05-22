import { useEffect, useState } from "react";
import { getTeams } from "../../services/football";

import style from "./style.module.scss";

export function MyTeams() {
  const [teams, setTeams] = useState([]);

  const getMyTeams = async () => {
    setTeams(await getTeams());
  };

  useEffect(() => {
    getMyTeams();
  }, []);

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Name:</th>
          <th>Description:</th>
        </tr>
      </thead>
      <tbody>
        {teams &&
          teams.map((team) => (
            <tr key={team.id} className={style.tableData}>
              <td>{team.name}</td>
              <td>
                {team.name} Squad{" "}
                <span>
                  <img
                    className={style.action}
                    src="./img/excluir.png"
                    alt="apagar"
                  />
                  <img
                    className={style.action}
                    src="./img/compartilhar.png"
                    alt="compartilhar"
                  />
                  <img
                    className={style.action}
                    src="./img/editar.png"
                    alt="alterar"
                  />
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

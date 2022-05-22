import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeams } from "../../services/football";
import { MyTeams } from "../MyTeams";

import style from "./style.module.scss";

export function Content() {
  return (
    <div className={style.content}>
      <div className={style.myTeams}>
        <span className={style.titleDiv}>
          <b className={style.myTeamsTitle}>My teams</b>
          <Link to={"/create-your-team"}>
            <b className={style.myTeamsMore}>+</b>
          </Link>
        </span>
        <MyTeams />
      </div>
      <div className={style.top5}>
        <div className={style.top5Five}>
          <span className={style.titleTop5}>
            <b>Top 5</b>
          </span>
        </div>
        <div className={style.moreAndLess}>
          <div className={style.more}>
            <div className={style.moreAndLessData}>
              <div>
                <span>Most picked player</span>
              </div>
              <div className={style.dataPlaye}>
                <div className={style.borderPlayerMore}>
                  <div className={style.person}>
                    <img className={style.photo} src="./img/pessoa1.png" />
                  </div>
                </div>
                <span>75%</span>
              </div>
            </div>
          </div>
          <div className={style.mid}></div>
          <div className={style.less}>
            <div className={style.moreAndLessData}>
              <div>
                <span>Less picked player</span>
              </div>
              <div className={style.dataPlaye}>
                <div className={style.borderPlayerLess}>
                  <div className={style.person}>
                    <img className={style.photo} src="./img/pessoa2.png" />
                  </div>
                </div>
                <span>25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

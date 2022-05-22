import { useState } from "react";
import style from "./style.module.scss";

export function Form() {
  return (
    <div className={style.content}>
      <span className={style.titleDiv}>
        <b className={style.createTeamTitle}>Create your team</b>
      </span>
      <span className={style.title1}>TEAM INFORMATION</span>
      <form>
        <div className={style.section1}>
          <div>
            <label className={style.labelInputs} htmlFor="team">
              Team name
            </label>
            <br />
            <input
              className={style.input}
              type="text"
              name="team"
              placeholder="insert team name"
            />
          </div>
          <br />
          <div>
            <label htmlFor="description">Description</label>
            <br />
            <textarea name="description" id="" cols={40} rows={10} />
          </div>
        </div>

        <div className={style.section2}>
          <div>
            <label className={style.labelInputs} htmlFor="team">
              Team website
            </label>
            <br />
            <input
              className={style.input}
              type="text"
              name="teamsite"
              placeholder="http://myteam.com"
            />
          </div>
          <br />
          <div>
            <br />
            <legend>Team type</legend>
            <input
              type="radio"
              name="tipeTeam"
              style={{ marginRight: "0.25rem" }}
            />
            <label htmlFor="real" style={{ marginRight: "1.5rem" }}>
              Real
            </label>
            <input
              type="radio"
              name="tipeTeam"
              style={{ marginRight: "0.25rem" }}
            />
            <label htmlFor="real">Fantasy</label>
          </div>
          <br />
          <div>
            <label htmlFor="tags">Tags</label>
            <br />
            <textarea name="tags" id="" cols={40} rows={5} />
          </div>
        </div>
      </form>
      <br />
      <button>Save</button>
    </div>
  );
}

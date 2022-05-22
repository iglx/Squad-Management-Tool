import { Link } from "react-router-dom";
import style from "./style.module.scss";

export function Header() {
  return (
    <>
      <div className={style.header}>
        <div className={style.headerLogo}>
          <Link to={"/"}>
            <img className={style.logoImg} src="./img/logo.png" />
          </Link>
          <span className={style.logoName}>Squad Management Tool</span>
        </div>
        <div className={style.headerLogo}>
          <span className={style.nameUser}>John Doe</span>
          <span className={style.nameLogo}>JD</span>
        </div>
      </div>
    </>
  );
}

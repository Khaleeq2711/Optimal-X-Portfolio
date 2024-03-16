import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo} >OPTIMAL X</div>
      <div className={style.btns}>
        <div>Company</div>
        <div>Services</div>
        <div>Resources</div>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Header;

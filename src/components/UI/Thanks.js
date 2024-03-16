import React from "react";
import style from "./Thanks.module.css";

function Thanks() {
  return (
    <div className={style.main}>
      <div className={style.thanks}>
        THANKS FOR
        <br /> TRYING OUT !
      </div>
      <hr />
      <div className={style.mid}>
        SUPPORT US TO MAKE MORE TEMPLATES LIKE THIS.
      </div>
      <hr/>
      <div className={style.bottom}>
        <div>Optimal X</div>
        <div>Instagram</div>
      </div>
    </div>
  );
}

export default Thanks;

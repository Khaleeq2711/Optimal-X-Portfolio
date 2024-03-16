import React from "react";
import style from "./starting.module.css";
// import sample from "../assets/backVideo.mp4";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
// import sample from "../assets/contactVideo.mp4";

import "animate.css";

function Starting() {
  return (
    <div className={`${style.starting} animate__animated animate__slideInDown`}>
      {/* <video className={style.videoUI} autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      <div
        className={`${style.main}`}
        //  data-aos="fade-down"
      >
        SCALE YOUR BRAND WITH THE BEST BUSINESS PROCESS IMPROVEMENT SOLUTION.
      </div>
      <div
        className={`${style.item2} `}
        style={{ display: "flex" }}
        // data-aos="fade-left"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="2500"
      >
        <DoubleArrowIcon
          sx={{
            color: "#ffa800",
            fontSize: "larger",
          }}
        />
        <div>
          At Optimal-X, We use AIDA marketing approach to develop technology &
          design processes in a way that will help your business generate higher
          ROI.
        </div>
      </div>
    </div>
  );
}

export default Starting;

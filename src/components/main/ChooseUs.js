import React from "react";
import style from "./ChooseUs.module.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Choose from "../assets/ChooseUs.svg";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function ChooseUs() {
  const navigate = useNavigate();
  const letsConnectHandler = (e) => {
    e.preventDefault();
    navigate("/Contact");
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.main}>
      {/* <div className={style.mainHeading}>WE OFFER</div> */}
      <Box sx={{ width: "100%", marginTop: "2%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            lg={6}
            md={12}
            // data-aos="fade-right"
            // data-aos-duration="2000"
          >
            <img src={Choose} alt="imagee" className={style.image} />
          </Grid>
          <Grid item lg={6} md={12}>
            <h1 className={style.heading}>Why Choose Us</h1>
            <p className={style.text}>
              Set your business on Wheels for Post-Recession Success with
              Pakistan's Leading Industry Professionals, Delivering Unparalleled
              Client Satisfaction and Quality Workmanship.
            </p>
            <button onClick={letsConnectHandler} className={style.btn}>
              Let's Connect <NavigateNextIcon sx={{ color: "skyBlue" }} />
            </button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ChooseUs;

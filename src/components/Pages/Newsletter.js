import React, { useEffect } from "react";
import style from "./AboutPage.module.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

function Newsletter() {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/");
  };
  const contactHandler = () => {
    navigate("/Contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className={style.about}>
      <h1
        className={`${style.heading1} animate__animated animate__lightSpeedInLeft`}
        // data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
      >
        Newsletter
      </h1>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "2%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            lg={6}
            md={12}
            className={` animate__animated animate__fadeInLeft`}
            style={{ animationDuration: "2.5s" }}
            // data-aos="fade-right"
            // data-aos-offset="300"
            // data-aos-duration="2000"
            // data-aos-easing="ease-in-sine"
          >
            <h1 className={style.heading}>OPTIMAL X News</h1>
            <p className={style.text}>Coming Soon...</p>
            <button
              className={style.contact_btn}
              onClick={contactHandler}
            >
              Contact
            </button>
          </Grid>
        </Grid>
      </Box>
      <button
        className={style.back_btn}
        onClick={goBackHandler}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default Newsletter;

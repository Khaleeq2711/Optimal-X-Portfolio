import React from "react";
import style from "./Trust.module.css";

// import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import desnep from "../assets/desnep.png";
import moonstone from "../assets/moonstone1.png";
import ajeeb from "../assets/ajeeb.png";
import costa from "../assets/costa.png";
import ibex from "../assets/ibex.jpeg";
import pepsico from "../assets/pepsico.png";
// import toledo from "../assets/toledo.png";
// import uplift from "../assets/uplift.png";
// import OXLOGO from "../assets/OX Logo.jpg";
// import redbull from "../assets/redbull.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Trust() {
  // function arrowInSlider(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ display: "none", backgroundColor:'black', color:'black' }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 6,
    autoplay: true,
    speed: 18000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    // swipeToSlide: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className={style.trust}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={12} xs={12}>
            <div className={style.item1}>
              Trusted by{" "}
              <div style={{ display: "flex" }}>
                <CountUp end={100} redraw={true} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <div
                        style={{
                          fontWeight: "bolder",
                          textShadow: "0 0 1px yellow",
                          fontFamily:
                            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                        }}
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                + companies around the world
              </div>
            </div>
          </Grid>
          {/* <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.123)",
              borderTop: "1px solid rgba(255, 255, 255, 0.123)",
              marginTop: "5%",
              paddingTop: "5%",
            }}
          >
            <div
              className={style.logo}
              style={{ border: "none" }}
              data-aos="fade-up"
            >
              <img
                src={OXLOGO}
                alt="Logo"
                style={{
                  border: "1px solid white",
                  objectFit: "contain",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              />
            </div>
          </Grid> */}
        </Grid>
      </Box>
      <div className={style.slider_grid}>
        <Slider {...settings}>
          <div className={style.image_grid}>
            <div className={style.logo}>
              <img
                src={desnep}
                alt="Logo"
                style={{
                  objectFit: "contain",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
          <div className={style.image_grid}>
            <div className={style.logo}>
              <img
                src={ajeeb}
                alt="Logo"
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          <div className={style.image_grid}>
            <div className={style.logo}>
              <img
                src={costa}
                alt="Logo"
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          <div className={style.image_grid}>
            <div className={style.logo}>
              <img
                src={moonstone}
                alt="Logo"
                style={{
                  objectFit: "contain",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
          <div className={style.image_grid}>
            <div className={style.logo}>
              <img
                src={pepsico}
                alt="Logo"
                style={{
                  objectFit: "contain",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
          <div className={style.image_grid}>
            <div className={style.logo} style={{ border: "none" }}>
              <img
                src={ibex}
                alt="Logo"
                style={{
                  border: "1px solid white",
                  objectFit: "contain",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Trust;

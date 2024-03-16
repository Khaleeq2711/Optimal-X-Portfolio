import React, { useEffect } from "react";
import style from "./AboutPage.module.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "animate.css";

function About() {
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
        ABOUT US
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
            <h1 className={style.heading}>OPTIMAL X</h1>
            <p className={style.text}>
              At <b>OPTIMAL X</b>, we are passionate about helping businesses
              succeed in the digital age. Our journey began with a simple yet
              powerful vision: to provide top-notch solutions and services that
              empower companies to thrive, from their inception to becoming
              industry leaders.
            </p>
            <button
              className={style.contact_btn}
              onClick={contactHandler}
            >
              Contact
            </button>
          </Grid>
        </Grid>
      </Box>
      <Box className={style.blackBox}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={12} md={12}>
            <h1 className={style.heading_blackBox}>
              <DoubleArrowIcon
                sx={{
                  marginTop: "-8px",
                  marginRight: "10px",
                  color: "#ffa800",
                  fontSize: "larger",
                }}
              />
              WE Come From a Humble Beginning
            </h1>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item lg={3} md={6} xs={6} className={style.blackBox_item}>
              <CountUp end={17} redraw={true} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <div ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <h5>Startups & SMBs</h5>
            </Grid>
            <Grid item lg={3} md={6} xs={6} className={style.blackBox_item}>
              <CountUp end={48} redraw={true} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <div ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>{" "}
              <h5>Projects</h5>
            </Grid>
            <Grid item lg={3} md={6} xs={6} className={style.blackBox_item}>
              <CountUp end={5} redraw={true} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <div ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>{" "}
              <h5>Countries</h5>
            </Grid>
            <Grid item lg={3} md={6} xs={6} className={style.blackBox_item}>
              <CountUp end={17} redraw={true} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <div ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>{" "}
              <h5>Team Members</h5>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "5%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={10} md={12}>
            <h1 className={style.heading}>COMPANY</h1>
            <p className={style.text}>
              Our Company, <b>OPTIMAL X</b> is on a mission to redefine the
              digital landscape by providing innovative solutions and services
              that empower businesses to thrive in an ever-evolving market. With
              a focus on quality, creativity, and results, we've built a
              reputation for excellence in everything we do.This Passion built
              with a vision to bridge the gap between businesses and their
              digital aspirations. Over the years, we've evolved into a dynamic
              team of experts who are passionate about helping businesses grow.
              We've seen trends come and go, but our commitment to delivering
              exceptional services remains constant.
              <br />
              <br />
              Whether you're a startup with big dreams or an established brand
              seeking a digital makeover, <b>OPTIMAL X</b> is your partner for
              success. Together, we can harness the power of digital to achieve
              your business objectives, expand your reach, and elevate your
              brand. Experience the difference with <b>OPTIMAL X</b>. Get in
              touch with us today, and let's embark on a digital journey that
              will transform your business. Your success story begins here.
            </p>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "4%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={10} md={12}>
            <h1 className={style.heading}>TEAM</h1>
            <p className={style.text}>
              Founded by a team of dedicated and forward-thinking individuals,
              <br />
              Including : <br />
              <b>Passionate Web & Mobile Application Developers</b>, with latest
              Technology Knowledge <b>Marketing Experts</b> and
              <b>Graphic Designers</b>, <b>Videographers</b>,{" "}
              <b>SEO Specialists</b>,<b> Social Media Specialists</b>,{" "}
              <b>Recovery Specialists.</b>
              <br />
              <br />
              <b>OPTIMAL X</b> has grown from a small startup into a
              full-fledged digital solutions provider. Our journey has been
              marked by continuous learning, adaptation, and innovation,
              allowing us to stay ahead in an ever-evolving industry.
            </p>

            <div>
              <iframe
                title="VIP"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4617.178705172004!2d72.97874215749741!3d33.640707739359314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97433c34e075%3A0x323ddd48e40d145d!2sOptimal%20Marketing!5e0!3m2!1sen!2sus!4v1695124903124!5m2!1sen!2sus"
                className={style.map}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <button
              className={style.back_btn}
              onClick={goBackHandler}
            >
              Go Back Home
            </button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;

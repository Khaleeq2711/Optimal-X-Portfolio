import React, { useEffect } from "react";
import style from "./WebPage.module.css";

import "animate.css";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import AdditionalServices from "../main/Additional_Services/OtherServices";
import ServicePricing from "../main/Additional_Services/ServicePricing";
import { useNavigate } from "react-router-dom";
// import ReactGA from "react-ga";
// import graphicBack from "../assets/graphicPage.avif";

const data = [
  {
    heading: "Web App",
    description:
      "Elevate your online presence with intuitive and scalable Web Applications, bridging the gap between your business goals and user satisfaction.",
    logo: "web",
  },
  {
    heading: "Digital Marketing",
    description:
      "At Optimal X, we decide what is best for our clients by carefully analyzing and optimizing every part of Sales & Marketing Process at your Company.",
    logo: "digital",
  },
  {
    heading: "Graphic Designing",
    description:
      "Elevating design aesthetics through the expertise of Pakistan's foremost graphic artists and innovators.",
    logo: "graphic",
  },
];
const pricing = [
  {
    read: "NO",
    btn: "Basic Package",
    ul: (
      <>
        <li>Functional App with Frontend & Backend.</li>
        <li>Splash Screen</li>
        <li>App Pages (2-3)</li>
        <li>Revisions and Iteration (Max: 2 Times)</li>
        <li>Operating System (1)</li>
      </>
    ),
    price: "140,000 PKR",
    img: "landing",
  },
  {
    read: "NO",
    btn: "Standard Package",
    ul: (
      <>
        <li>Functional App with Frontend & Backend.</li>
        <li>Splash Screen.</li>
        <li>App Pages (5-7)</li>
        <li>Ad Network Integration.</li>
        <li>(Optional) Include source code.</li>
        <li>Revisions and Iteration (Max: 4 Times)</li>
        <li>App Security (6 Months)</li>
        <li>Operating System (2)</li>
      </>
    ),
    price: "420,000 PKR",
    img: "branding",
  },
  {
    read: "NO",
    btn: "Premium Package",
    ul: (
      <>
        <li>Functional App with Frontend & Backend.</li>
        <li>Splash Screen.</li>
        <li>App Pages (10-15)</li>
        <li>Ad Network Integration.</li>
        <li>Include source code.</li>
        <li>Revisions and Iteration (Any Time)</li>
        <li>App Security (1 Year)</li>
        <li>Operating System (2)</li>
      </>
    ),
    price: "Starting from 640,000 PKR",
    img: "digitalmarketing",
  },
];

function MobilePage() {
  const navigate = useNavigate();

  const buildBrandHandler = (e) => {
    navigate("/Contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Mobile");
  }, []);

  return (
    <div className={style.web}>
      <div
        style={{
          background: " rgba(255, 255, 255, 0.123)",
          borderLeft: "10px solid yellow",

          // clipPath: "polygon(100% 40%, 100% 60%, 0 100%, 0 100%, 0 0)",
          //   marginLeft: "2%",
        }}
      >
        <h1
          className={style.heading1}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Mobile Application Development
        </h1>
        <Box
          sx={{ width: "90%", margin: "auto", marginTop: "2%" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
        >
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item lg={6} md={12} className="animate__bounceInDown">
              <h2 className={style.heading}>
                <span className={style.yellow}>Crafting</span> Seamless Mobile
                Experiences with Expert App Development
              </h2>
              <motion.button
                className={style.contact_btn}
                onClick={buildBrandHandler}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Build my App
              </motion.button>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "2%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* <Grid item lg={6} md={12}>
            <h1 className={style.heading}>
              <span className={style.yellow}>Visual</span> Branding Excellence
            </h1>
            <p className={style.text}>
              Our Graphic Designers have expertise in crafting visually
              appealing and consistent brand identities that resonate with
              users.
            </p>
          </Grid> */}
          <Grid
            item
            lg={10}
            md={12}
            sx={{
              marginTop: "5%",
              marginBottom: "5%",
              border: "1px solid white",
              borderRadius: "20px",
              paddingBlock: "2%",
            }}
          >
            <h1 className={style.heading}>
              <span className={style.yellow}>Services</span> includes.
            </h1>
            <ul style={{ listStyleType: "square" }}>
              <li>
                <b>Custom App:</b> We can Create tailor-made mobile apps from
                scratch, based on client requirements.
              </li>
              <li>
                <b>Cross-Platform:</b> We Develop apps that work seamlessly on
                multiple platforms (iOS, Android, etc.) using frameworks like
                React Native or Flutter.
              </li>
              <li>
                <b>Native:</b> Crafting native apps specifically for Android or
                iOS for optimized performance.
              </li>
              <li>
                <b>Backend:</b> Building robust server-side solutions,
                databases, and APIs to support app functionality.
              </li>
              <li>
                <b>Security:</b> We Ensure robust security measures to protect
                user data and privacy.
              </li>
              <li>
                <b>Testing:</b> We Conduct comprehensive testing, including unit
                testing, integration testing, and user acceptance testing.
              </li>
              <li>
                <b>Performance Optimization:</b> Optimizing app speed,
                responsiveness, and memory usage for a smooth user experience.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <ServicePricing pricing={pricing} />
        <AdditionalServices data={data} />
      </motion.div>
    </div>
  );
}

export default MobilePage;

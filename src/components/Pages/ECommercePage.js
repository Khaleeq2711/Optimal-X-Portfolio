import React, { useEffect, lazy, Suspense } from "react";
import style from "./WebPage.module.css";
import "animate.css";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import ReactGA from "react-ga";
// import graphicBack from "../assets/graphicPage.avif";
const AdditionalServices = lazy(() =>
  import("../main/Additional_Services/OtherServices")
);
const ServicePricing = lazy(() =>
  import("../main/Additional_Services/ServicePricing")
);

const data = [
  {
    heading: "Web App",
    description:
      "Elevate your online presence with intuitive and scalable Web Applications, bridging the gap between your business goals and user satisfaction.",
    logo: "web",
  },
  {
    heading: "Mobile App",
    description:
      "Bring your ideas to life on the go with Mobile Application Development, creating engaging and user- friendly experiences for your customers across devices.",
    logo: "mobile",
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
    heading: "Monthly Revenue: 1-3 Million PKR",
    ul: <></>,
    btn: "Teir-1",
    img: "landing",
  },
  {
    read: "NO",
    heading: "Monthly Revenue: 3-10 Million PKR",
    btn: "Teir-2",
    ul: <></>,
    img: "branding",
  },
  {
    read: "NO",
    heading: "Monthly Revenue: Above 10 Million PKR",
    ul: <></>,
    btn: "Teir-3",
    img: "digitalmarketing",
  },
];

function EcommercePage() {
  const navigate = useNavigate();

  const buildBrandHandler = () => {
    navigate("/Contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Digital");
  }, []);

  return (
    <div className={style.web}>
      <div
        style={{
          background: " rgba(255, 255, 255, 0.123)",
          borderLeft: "10px solid yellow",

          //   clipPath: "polygon(100% 40%, 100% 60%, 0 100%, 0 100%, 0 0)",
          //   marginLeft: "2%",
        }}
      >
        <h1
          className={`${style.heading1} animate__animated animate__lightSpeedInLeft`}
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
        >
          E-Commerce Consultation
        </h1>
        <Box
          sx={{ width: "90%", margin: "auto", marginTop: "2%" }}
          className={` animate__animated animate__fadeInLeft`}
          style={{ animationDuration: "2.5s" }}
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-duration="2000"
          // data-aos-easing="ease-in-sine"
        >
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item lg={6} md={12} className="animate__bounceInDown">
              <h2 className={style.heading}>
                <span className={style.yellow}>Unlocking</span> E-commerce
                Success with Strategic Guidance and Solutions
              </h2>
              <button className={style.contact_btn} onClick={buildBrandHandler}>
                Book Consultaion
              </button>
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
                <b>Strategy Development:</b> Creating Advanced e-commerce
                strategies to align with clients' business goals and market
                trends.
              </li>
              <li>
                <b>Market Research:</b> Conducting in-depth market research and
                competitor analysis to Identify opportunities and threats.
              </li>
              <li>
                <b>Business Model Assessment:</b> Evaluating and optimize
                e-commerce business models, including B2B, B2C, D2C, and more.
              </li>
              <li>
                <b>SEO and SEM:</b> Improving online visibility through search
                engine optimization (SEO) and manage pay-per-click advertising
                campaigns (SEM).
              </li>
              <li>
                <b>Social Media Commerce:</b> Creating strategies for selling
                products directly on social media platforms (e.g., Facebook
                Shops, Instagram Shopping).
              </li>
              <li>
                <b>Customer Relationship Management (CRM):</b> Implement CRM
                systems to enhance customer engagement and loyalty.
              </li>
              <li>
                <b>Website & Mobile App Development</b>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>

      <Suspense fallback={<div style={{ height: "20vh" }}> </div>}>
        <ServicePricing pricing={pricing} />
      </Suspense>

      <Suspense fallback={<div style={{ height: "20vh" }}></div>}>
        <AdditionalServices data={data} />
      </Suspense>
    </div>
  );
}

export default EcommercePage;

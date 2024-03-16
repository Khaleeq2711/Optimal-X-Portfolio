import React, { lazy, Suspense, useEffect } from "react";
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
        <li>Snippets</li>
        <li>Short Video Clips</li>
        <li>Interactive Content</li>
      </>
    ),
    price: "100,000 PKR",
    img: "landing",
  },
  {
    read: "NO",
    btn: "Standard Package",
    ul: (
      <>
        <li>More Snippets</li>
        <li>More Video Clips</li>
        <li>More Interactive Content</li>
      </>
    ),
    price: "200,000 PKR",
    img: "branding",
  },
  {
    read: "NO",
    btn: "Premium Package",
    ul: (
      <>
        <li>Even More Snippets</li>
        <li>Even More Video Clips</li>
        <li>Even More Interactive Content</li>
        <li>Analytics & Optimization</li>
      </>
    ),
    price: "Starting from 300,000 PKR",
    img: "digitalmarketing",
  },
];

function ShortPage() {
  const navigate = useNavigate();

  const buildBrandHandler = (e) => {
    navigate("/Contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Short");
  }, []);

  return (
    <div className={style.web}>
      <div
        style={{
          background: " rgba(255, 255, 255, 0.123)",
          borderLeft: "10px solid yellow",
          fontFamily: "Young Serif",
          // clipPath: "polygon(100% 40%, 100% 60%, 0 100%, 0 100%, 0 0)",
          //   marginLeft: "2%",
        }}
      >
        <h1
          className={`${style.heading1} animate__animated animate__lightSpeedInLeft`}
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
        >
          Short Form Content
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
                <span className={style.yellow}>Unleash</span> Your Brand's
                Potential with Our <br />
                Short-Form Magic!
              </h2>
              <button className={style.contact_btn} onClick={buildBrandHandler}>
                Create Content for Me
              </button>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "2%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                <b>Mastering Micro-Moments:</b> Crafting Short-Form Brilliance
                for Your Brand's Success.
              </li>
              <li>
                <b>Data-Driven Insights:</b> Offer in-depth data analysis and
                insights to fine-tune strategies continually.
              </li>
              <li>
                <b>Creative Innovation:</b> Stay ahead with unique and
                eye-catching content ideas that stand out.
              </li>
              <li>
                <b>Storytelling Mastery:</b> Elevate storytelling skills to
                create emotionally resonant content in limited time.
              </li>
              <li>
                <b>24/7 Engagement:</b> Provide round-the-clock engagement and
                support to foster Brand loyalty.
              </li>
              <li>
                <b>Content Distribution:</b> Implement effective content
                distribution strategies to reach a wider audience.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>

      <Suspense fallback={<div style={{ height: "20vh" }}> </div>}>
        <ServicePricing pricing={pricing} />
      </Suspense>

      <Suspense fallback={<div style={{ height: "20vh" }}> </div>}>
        <AdditionalServices data={data} />
      </Suspense>
    </div>
  );
}

export default ShortPage;

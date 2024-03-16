import React, { useEffect, lazy, Suspense } from "react";
import style from "./WebPage.module.css";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
// import { motion } from "framer-motion";
// import ReactGA from "react-ga";
// import graphicBack from "../assets/graphicPage.avif";
// import sample from "../assets/uiVideo.mp4";
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
    heading: "Digital Marketing",
    description:
      "At Optimal X, we decide what is best for our clients by carefully analyzing and optimizing every part of Sales & Marketing Process at your Company.",
    logo: "digital",
  },
];
const pricing = [
  {
    read: "NO",
    btn: "Basic Package",
    ul: (
      <>
        <li>1 Mobile Screen UI/UX.</li>
        <li>1 Desktop page UI/UX.</li>
        <li>Custom Assets included.</li>
        <li>Revisions and Iteration (Max: 2 Times)</li>
        <li>Delivery Time (3 Days)</li>
      </>
    ),
    // price: "60,000 PKR",
    price: "400 $",
    img: "landing",
  },
  {
    read: "NO",
    btn: "Standard Package",

    ul: (
      <>
        <li>6 mobiles screens.</li>
        <li>6 desktops App UI UX Design.</li>
        <li>Wireframes.</li>
        <li>Interactive Prototype.</li>
        <li>Includes Source File.</li>
        <li>Revisions and Iteration (Max: 5 Times)</li>
        <li>Delivery Time (5 Days)</li>
      </>
    ),
    // price: "220,000 PKR",
    price: "1200 $",
    img: "branding",
  },
  {
    read: "NO",
    btn: "Premium Package",

    ul: (
      <>
        <li>20 Mobile Screen UI/UX.</li>
        <li>20 desktop Screen UI/UX.</li>
        <li>Wireframes.</li>
        <li>Interactive Prototype.</li>
        <li>Includes Source File.</li>
        <li>Revisions and Iteration (Max: 7 Times)</li>
        <li>Delivery Time (7 Days)</li>
      </>
    ),
    // price: "610,000 PKR",
    price: "2200 $",
    img: "digitalmarketing",
  },
];

function GraphicPage() {
  const navigate = useNavigate();

  const buildBrandHandler = () => {
    navigate("/Contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Designing");
  }, []);

  return (
    <div className={style.web}>
      <div
        style={{
          background: " rgba(255, 255, 255, 0.123)",
          borderLeft: "10px solid yellow",
          height: "500px",
          //   clipPath: "polygon(100% 40%, 100% 60%, 0 100%, 0 100%, 0 0)",
          //   marginLeft: "2%",
        }}
      >
        {/* <video className={style.videoUI} autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video> */}
        <h1
          className={`${style.heading1} animate__animated animate__lightSpeedInLeft`}
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
        >
          UI/UX & Graphics Designing
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
                <span className={style.yellow}>Elevating</span> Designs through
                Stunning Visuals and Intuitive Experiences
              </h2>
              <button className={style.contact_btn} onClick={buildBrandHandler}>
                Design my Project
              </button>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "2%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6} md={12}>
            <h1 className={style.heading}>
              <span className={style.yellow}>Visual</span> Branding Excellence
            </h1>
            <p className={style.text}>
              Our Graphic Designers have expertise in crafting visually
              appealing and consistent brand identities that resonate with
              users.
            </p>
          </Grid>
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
              <span className={style.yellow}>Designing</span> Services includes.
            </h1>
            <ul style={{ listStyleType: "square" }}>
              <li>
                <b>Interactive Design:</b> Here We Implement engaging
                interactions and animations to enhance user engagement.
              </li>
              <li>
                <b>Cross-Platform Consistency:</b> Maintaining design
                consistency across web and mobile platforms for brand coherence.
              </li>
              <li>
                <b>Conversion Optimization:</b> Design interfaces that encourage
                user actions and meet business objectives.
              </li>
              <li>
                <b>Custom Illustrations and Icons:</b> Craft unique visuals that
                enhance interface aesthetics.
              </li>
              <li>
                <b>Wireframing and Prototyping:</b> Create wireframes and
                interactive prototypes to visualize the design and gather
                feedback.
              </li>
              <li>
                <b>Usability Testing:</b> We Conduct usability tests to identify
                & rectify design issues early in the process.
              </li>
              <li>
                <b>UX/UI Audits:</b> Offer audits to identify areas for
                improvement in existing designs and propose enhancements.
              </li>
              <li>
                <b>Collaboration: </b>Engaging clients and stakeholders in
                collaborative design workshops to gather insights.
              </li>
              <li>
                <b>Analytics and Reporting: </b> Provide clients with insights
                and reports while developing Web App.
              </li>
              <li>
                <b>Technological Expertise:</b> At Optimal-X, we use the latest
                Designing technologies and trends.
              </li>
              <li>
                <b>Graphic Designing:</b> Logos, Branding Materials, Posters,
                Brochures, and more.
              </li>
              <li>
                <b>Responsive Design (Extra Charges):</b> Ensuring that designs
                adapt seamlessly to various screen sizes and devices for a
                consistent user experience.
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

export default GraphicPage;

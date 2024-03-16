import React, { useEffect, lazy, Suspense } from "react";
import style from "./WebPage.module.css";
import "animate.css";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ReactGA from "react-ga";
// import { motion } from "framer-motion";
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
    btn: "Basic Package",
    ul: (
      <>
        <li>Competitors analyzed ( 2 )</li>
        <li>SWOT analysis and strategic positioning.</li>
        <li>Target audience.</li>
        <li>Content creation.</li>
        <li>Action Plan.</li>
        <li>Improvement Report (every 5 days)</li>
      </>
    ),
    // price: "70,000 PKR",
    price: "450 $",
    img: "landing",
  },
  {
    read: "NO",
    btn: "Standard Package",
    ul: (
      <>
        <li>Competitors analyzed ( 3 )</li>
        <li>SWOT analysis and strategic positioning.</li>
        <li>Target audience and buyer persona.</li>
        <li>Content creation.</li>
        <li>Action Plan.</li>
        <li>Channels & Tools</li>
        <li>Engagement with Followers.</li>
        <li>Improvement Report (every 5 days)</li>
      </>
    ),
    // price: "120,000 PKR",
    price: "800 $",
    img: "branding",
  },
  {
    read: "NO",
    btn: "Premium Package",
    ul: (
      <>
        <li>Competitors analyzed ( 5 )</li>
        <li>SWOT analysis and strategic positioning.</li>
        <li>Target audience and buyer persona.</li>
        <li>Advanced Action Plan.</li>
        <li>Content creation.</li>
        <li>Channels & Tools</li>
        <li>Engagement with Followers.</li>
        <li>Improvement Report (every 3 days)</li>
      </>
    ),
    // price: "200,000 PKR",
    price: "1500 $",
    img: "digitalmarketing",
  },
];

function DigitalPage() {
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
          Digital Marketing & SEO Services
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
                <span className={style.yellow}>Boosting</span> Online Visibility
                and Conversions with Digital Marketing Expertise
              </h2>
              <button className={style.contact_btn} onClick={buildBrandHandler}>
                Improve my Brand
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
                <b>Analytics and Reporting: </b> Provide clients with insights
                and reports while Marketing.
              </li>
              <li>
                <b>Technological Expertise:</b> At Optimal-X, we use the latest
                Digital Marketing & SEO technologies and trends.
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

export default DigitalPage;

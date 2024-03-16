import React, { useEffect, lazy, Suspense } from "react";
import style from "./BrandingPage.module.css";
import "animate.css";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import ReactGA from "react-ga";
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
    heading: "Monthly Revenue: 1-3 Million PKR",
    ul: (
      <>
        <li>Building a Personal Brand</li>
        <li>Quality Content Creation</li>
        <li>Engaging & Informative Content</li>
        <li>Long Form Videos (X 2)</li>
        <li>Short Form Videos (X 20) (Edit by a Post-Production Team)</li>
        <li>Two Day Shoot</li>
        <li>Stills by Graphic Designer (X 20)</li>
        <li>
          Equipment Used:
          <ul>
            <li>
              Camera:
              <ol>
                <li>Mark 2 canon-6D (X 1)</li>
                <li> Iphone Camera (X 1)</li>
              </ol>
            </li>
            <li>Studio Lighhts (X 2)</li>
            <li>TriPod & Gimble (X 2)</li>
            <li>Wireless Mic</li>
          </ul>
        </li>
      </>
    ),
    // price: "54,000 PKR",
    price: "350 $ / month",
    btn: "Teir-1",
    img: "landing",
  },
  {
    read: "NO",
    heading: "Monthly Revenue: 3-10 Million PKR",
    btn: "Teir-2",
    ul: (
      <>
        <li>Capturing the Brand Story</li>
        <li>Social Profile Handling & Compaign Management</li>
        <li>Google Ads</li>
        <li>Google Profile Optimization</li>
        <li>Content Creation for Social Profiles</li>
        <li>Long Form Videos (X 4)</li>
        <li>Short Form Videos (X 40)</li>
        <li>Four Day Shoot</li>
        <li>Stills by Graphic Designer (X 40)</li>
        <li>
          Creative Written Scripts are Provided to induce Individuality &
          Engagement
        </li>
        <li>
          Equipment Used:
          <ul>
            <li>
              Camera:
              <ol>
                <li>Mark 2 canon-6D (X 2)</li>
                <li> Iphone Camera(X 1)</li>
              </ol>
            </li>
            <li>Studio Lighhts (X 2)</li>
            <li>TriPod & Gimble (X 3)</li>
            <li>Wireless Mic (X 2)</li>
          </ul>
        </li>
      </>
    ),
    // price: "94,000 PKR",
    price: "500 $ / month",
    img: "branding",
  },
  {
    read: "NO",
    heading: "Monthly Revenue: Above 10 Million PKR",
    ul: (
      <>
        <li>Altering the Brand Perception</li>
        <li>Social Profile Handling & Compaign Management</li>
        <li>Google Ads</li>
        <li>Google Profile Optimization</li>
        <li>Converting Traffic</li>
        <li>Long Form Videos (X 4)</li>
        <li>Short Form Videos (X 80)</li>
        <li>Four Day Shoot</li>
        <li>Stills by Graphic Designer (X 60)</li>
        <li>
          Written Creative Scripts are Provided to induce Individuality &
          Engagement
        </li>
        <li>
          Equipment Used:
          <ul>
            <li>
              Camera:{" "}
              <ol>
                <li>Mark 2 canon-6D (X 3)</li>
                <li> Iphone Camera(X 1)</li>
              </ol>
            </li>
            <li>Studio Lighhts (X 2)</li>
            <li>TriPod & Gimble (X 5)</li>
            <li>Wireless Mic (X 3)</li>
          </ul>
        </li>
      </>
    ),
    // price: "180,000 PKR",
    price: "750 $ / month",
    btn: "Teir-3",
    img: "digitalmarketing",
  },
];
function Branding() {
  const navigate = useNavigate();

  const buildBrandHandler = () => {
    navigate("/Contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Branding");
  }, []);

  return (
    <div className={style.branding}>
      <h1
        className={`${style.heading1} animate__animated animate__lightSpeedInLeft`}
        style={{ animationDuration: "1s" }}
        // data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
      >
        Personal Branding
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
            <h1 className={style.heading}>Find Your Niche</h1>
            <p className={style.text}>
              Building a personal brand is vital because in today's world,
              existence is split between the digital and physical realms. It's
              about crafting an online presence that mirrors your offline
              authenticity, connecting with a broader audience, and shaping your
              desired reputation.
            </p>
            <button className={style.contact_btn} onClick={buildBrandHandler}>
              Build My Brand
            </button>
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

export default Branding;

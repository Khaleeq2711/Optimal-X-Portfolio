import React, { lazy, useEffect, Suspense } from "react";
import style from "./WebPage.module.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
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
    heading: "Graphic Designing",
    description:
      "Elevating design aesthetics through the expertise of Pakistan's foremost graphic artists and innovators.",
    logo: "graphic",
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
        <li>
          <b>Best for small to Medium Business.</b>
        </li>
        <li>
          Stunning Web Apps using The Latest <b>React.js</b> and Modern Styling
          Technologies.
        </li>
        <li>Creating from scratch to meet specific client requirements.</li>
        <li>Animation and UI/UX Designing according to Need.</li>
        <li>Feedback and Iteration when Needed.</li>
        <li>Full Responsive Design.</li>
        <li>Testing & Maintenance. </li>
        <li>Web Security. </li>
        <li>
          <b>Example Projects : </b>Clinics, Restaurants, Hardware Stores,
          Lawyers.
        </li>
      </>
    ),
    // price: "80,000 PKR",
    price: "600 $ - 800 $",
    btn: "Teir-1",
    img: "landing",
  },
  {
    read: "NO",
    heading: "Monthly Revenue: 3-10 Million PKR",
    btn: "Teir-2",
    ul: (
      <>
        <li>
          <b>Best for Advanced Business.</b>
        </li>
        <li>
          Revolutionize your Web with The Latest <b>React.js</b> and Modern
          Styling Technologies.
        </li>
        <li>
          Utilize the Power of Javascript to Add Optimal Functionality to your
          Business's Marketing & Sales Processes
        </li>
        <li>
          <b>E-Commerce Solutions:</b> Online stores with secure payment
          gateways, product catalogs, and inventory management.
        </li>
        <li>
          <b>Database Management System: </b>Design and integrate databases to
          store and retrieve data efficiently.
        </li>
        <li>
          <b>CMS:</b> Implementing robust "Content Management System" for easy
          content updates and management.
        </li>
        <li>
          <b>SEO: </b>Search Engine Optimization Service (1 Year)
        </li>
        <li>(Optional) Custom Design for whole Website.</li>
        <li>Testing & Maintenance (1 Year)</li>
        <li>Web Security (1 Year)</li>
        <li>
          <b>Example Projects : </b>E-commerce Solutions for Brands, Hotels,
          Shops, POS, other Management Systems
        </li>
      </>
    ),
    // price: "220,000 PKR",
    price: "1500 $ 2000 $",
    img: "branding",
  },
  {
    read: "NO",
    heading: "Monthly Revenue: Above 10 Million PKR",
    ul: (
      <>
        <li>
          <b>Best for cooperate Business</b>
        </li>
        <li>
          Transform your Ideas into Web Apps with The Latest <b>React.js</b> and
          Modern Styling Technologies.
        </li>
        <li>
          <b>Maintenance and Support:</b> Ongoing Maintenance, Updates, and
          Technical support for web applications.
        </li>
        <li>
          <b>Database Management System: </b>Design and integrate databases to
          store and retrieve data efficiently.
        </li>
        <li>
          <b>CMS:</b> Implementing robust "Content Management System" for easy
          content updates and management.
        </li>
        <li>
          <b>SEO: </b>Search Engine Optimization Service (1 Year)
        </li>
        <li>Backup and Disaster Recovery</li>
        <li>
          (Optional) Custom Functionality & Design for whole Website Management.
        </li>
        <li>Advanced level Technology & Trend</li>
        <li>Testing & Maintenance (Given Time)</li>
        <li>Web Security (Given Time)</li>
        <li>
          <b>Example Project : </b>
          Custom Enterprise Web Application, Scalable Cloud Hosting, Social
          Networking Site or Any Project Management Tool.
        </li>
      </>
    ),
    // price: "Starting from 350,000 PKR",
    price: "Starting from 4000 $",
    btn: "Teir-3",
    img: "digitalmarketing",
  },
];

function WebPage() {
  const navigate = useNavigate();

  const buildBrandHandler = () => {
    navigate("/Contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Web");
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
          Web Application Development
        </h1>
        <Box sx={{ width: "90%", margin: "auto", marginTop: "2%" }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid
              item
              lg={6}
              md={12}
              className={` animate__animated animate__fadeInLeft`}
              style={{ animationDuration: "2.5s" }}
            >
              <h2
                className={style.heading}
                // data-aos="fade-right"
                // data-aos-offset="300"
                // data-aos-duration="2000"
                // data-aos-easing="ease-in-sine"
              >
                <span className={style.yellow}>Empowering</span> Your Business
                with Transformative Web Applications
              </h2>
              <button className={style.contact_btn} onClick={buildBrandHandler}>
                Build My Web App
              </button>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box sx={{ width: "90%", margin: "auto", marginTop: "2%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6} md={12}>
            <h1 className={style.heading}>
              <span className={style.yellow}>Customized</span> Solutions
            </h1>
            <p className={style.text}>
              The development process here is tailored to deliver a fully
              customized Web application that caters specifically to your
              needs.Moreover We design and develop web applications with
              scalability and security in mind.
            </p>
          </Grid>
          <Grid item lg={6} md={12}>
            <h1 className={style.heading}>
              <span className={style.yellow}>Cutting</span> Edge Technologies
            </h1>
            <p className={style.text}>
              At Optimal-X, we stays up-to-date with the latest trends and
              technologies in web development. We leverage industry best
              practices and utilize cutting-edge tools and frameworks to build
              high-performance web applications.
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
              <span className={style.yellow}>Services</span> a Customer can get
              at Optimal X
            </h1>
            <ul style={{ listStyleType: "square" }}>
              <li>
                <b>Responsive Design:</b> Ensure that websites and web apps work
                seamlessly on various devices and screen sizes.
              </li>
              <li>
                <b>Scalability:</b> Ensure that web apps can handle increased
                loads and traffic as a business grows.
              </li>
              <li>
                <b>Performance Optimization: </b>Optimize code and assets for
                fast-loading websites and applications.
              </li>
              <li>
                <b>Progressive Web Apps (PWAs):</b> Develop progressive web apps
                that offer a native app-like experience on the web.
              </li>
              <li>
                <b>Analytics and Reporting: </b> Provide clients with insights
                and reports while developing Web App.
              </li>
              <li>
                <b>Technological Expertise:</b> At Optimal-X, we use the latest
                web development technologies and trends.
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

export default WebPage;

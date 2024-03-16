import React from "react";
import style from "./Card.module.css";

// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Branding from "../assets/Branding.svg";
import { useNavigate } from "react-router-dom";
import Web from "../assets/Web.svg";
import Digital from "../assets/Digital.svg";
import Mobile from "../assets/Mobile.svg";
import Testing from "../assets/Testing.svg";
import SEO from "../assets/SEO.svg";

function Card(props) {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (props.heading === "Branding") {
      navigate("/Branding");
    } else if (props.heading === "Web Redesign") {
      navigate("/Webservice");
    } else if (props.heading === "Digital Marketing & SEO") {
      navigate("/Short");
    } else if (props.heading === "Short Form Content") {
      navigate("/Designing");
    } else if (props.heading === "Graphics Design") {
      navigate("/Designing");
    } else if (props.heading === "E-Commerce Consultation")
      navigate("/Ecommerce");
  };

  return (
    <div
      className={`${style.card} `}
      // data-aos="zoom-in"
      // data-aos-easing="ease-out-cubic"
      // data-aos-duration="800"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textAlign: "left" }}
          color="text.secondary"
          gutterBottom
        >
          {props.heading === "Branding" ? (
            <img src={Branding} width="50px" height="50px" alt="Logo" />
          ) : props.heading === "Web Redesign" ? (
            <img src={Web} width="50px" height="50px" alt="Logo" />
          ) : props.heading === "Digital Marketing & SEO" ? (
            <img src={Digital} width="50px" height="50px" alt="Logo" />
          ) : props.heading === "Short Form Content" ? (
            <img src={Mobile} width="50px" height="50px" alt="Logo" />
          ) : props.heading === "Graphics Design" ? (
            <img src={Testing} width="50px" height="50px" alt="Logo" />
          ) : (
            <img src={SEO} width="50px" height="50px" alt="Logo" />
          )}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ fontSize: 35, fontWeight: "bold", marginTop: 1 }}
          className={style.heading}
          onClick={clickHandler}
        >
          {props.heading}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 13, marginTop: 1 }}>
          {props.description}
          <br />
        </Typography>
        {/* {" "}
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>{" "}
        */}
      </CardContent>
    </div>
  );
}

export default Card;

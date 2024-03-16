import React from "react";
import style from "./CardReview.module.css";

import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CardHeader } from "@mui/material";

import drew from "../assets/drew.jpeg";
import farzad from "../assets/farzad.jpg";
import kristine from "../assets/kristine.jpeg";
import john from "../assets/john.webp";
import saad from "../assets/saad.jpeg";
import sophia from "../assets/sophia.jpg";
import lisa from "../assets/lisa.jpg";

// import Purple from "../assets/purple.avif";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function CardReview(props) {
  return (
    <div
      className={style.card}
      ref={props.heading === "Darren" ? props.reff : null}
    >
      <Card sx={{ backgroundColor: "transparent" }}>
        <CardHeader
          sx={{ marginTop: -4 }}
          className={style.header}
          avatar={
            props.heading === "Saad Ali" ? (
              <Avatar>
                <img
                  src={saad}
                  alt="S"
                  style={{ objectFit: "contain", width: "inherit" }}
                />
              </Avatar>
            ) : props.heading === "Drew Stark" ? (
              <Avatar>
                <img
                  src={drew}
                  alt="D"
                  style={{ objectFit: "contain", width: "inherit" }}
                />
              </Avatar>
            ) : props.heading === "Lisa M." ? (
              <Avatar>
                <img
                  src={lisa}
                  alt="LM"
                  style={{ objectFit: "contain", width: "inherit" }}
                />
              </Avatar>
            ) : props.heading === "Kristine" ? (
              <Avatar>
                <img
                  src={kristine}
                  alt="K"
                  style={{ objectFit: "contain", width: "inherit" }}
                />
              </Avatar>
            ) : props.heading === "Farzad" ? (
              <Avatar>
                <img
                  src={farzad}
                  alt="F"
                  style={{ objectFit: "contain", width: "inherit" }}
                />
              </Avatar>
            ) : props.heading === "John H." ? (
              <Avatar>
                <img
                  src={john}
                  alt="J"
                  style={{ objectFit: "contain", width: "inherit" }}
                />
              </Avatar>
            ) : (
              props.heading === "Sophia" && (
                <Avatar>
                  <img
                    src={sophia}
                    alt="S"
                    style={{ objectFit: "contain", width: "inherit" }}
                  />
                </Avatar>
              )
            )
          }
          title={<h2>{props.heading}</h2>}
          subheader={
            <p
              style={{
                color: "rgba(255, 255, 255, 0.612)",
                marginTop: "-10px",
              }}
            >
              {props.subHeading}
            </p>
          }
        />
        <CardContent>
          <Typography
            variant="p"
            component="div"
            sx={{ color: "white", marginTop: "-5%" }}
          >
            {props.review}
          </Typography>
          {/* <CardActions>
            <Button size="small">
              Read More
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </CardActions>{" "} */}
        </CardContent>
      </Card>
    </div>
  );
}

export default CardReview;

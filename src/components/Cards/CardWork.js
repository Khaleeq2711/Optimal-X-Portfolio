import React, { useState } from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import style from "./CardWork.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { CardMedia } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

// import LandingPage from "../assets/landingPage.webp";
// import uidesignWork from "../assets/uidesignWork.png";
// import customwebWork from "../assets/customwebWork.jfif";
// import brandingWork from "../assets/brandWork.png";
// import ecommerce from "../assets/ecommerce.png";
// import digitalmarketing from "../assets/digitalmarketing.png";
// import customerservice from "../assets/customerservice.jpg";
// import shortFormVideo from "../assets/shortFormVideo.webp";

import CalendarUI from "../UI/CalendarUI";
import Alert from "@mui/material/Alert";
import Modal from "../UI/Modal";

import emailjs from "@emailjs/browser";
import dayjs from "dayjs";

function CardWork(props) {
  const [readmore, setReadmore] = useState(false);
  const [readmoreValue, setReadmoreValue] = useState("Read More");
  const [bookCons, setBookCons] = useState(false);
  const [alert, setAlert] = useState(false);

  const readMoreHandler = () => {
    setReadmore((readmore) => !readmore);
    setReadmoreValue(() => {
      return readmore ? "Read More" : "Read Less";
    });
  };
  const bookOnlineHandler = () => {
    setBookCons(true);
  };
  const bookNowHandler = (dateValue, timeValue, name, phone) => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2500);
    setBookCons(false);

    const EMAIL_DATA = {
      from_name: "Optimal X Services",
      to_name: "CEO, Optimal X",
      message: `Name: ${name}
      Phone Number:${phone}
      Service: ${props.heading} 
      Date of Meeting: ${dayjs(dateValue.$d).format("DD/MM/YYYY")}
      Time: ${dayjs(timeValue).format("hh:mm")}`,
    };
    console.log(EMAIL_DATA);

    emailjs
      .send(
        "service_4phdho9",
        "template_6mfwgqo",
        EMAIL_DATA,
        "B7kaN_EiTgNKIDFV0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const calenderCloseHandler = () => {
    setBookCons(false);
  };
  let btnSize = "medium";
  if (
    props.btn === "Basic Package" ||
    props.btn === "Standard Package" ||
    props.btn === "Premium Package"
  ) {
    btnSize = "larger";
  }
  return (
    <div className={style.card}>
      <Card sx={{ backgroundColor: "transparent" }}>
        {/*  {props.img === "branding" && (
          <CardMedia sx={{ height: 220 }} image={brandingWork} title="VIP" />
        )}
        {props.img === "customweb" && (
          <CardMedia sx={{ height: 180 }} image={customwebWork} title="VIP" />
        )}
        {props.img === "uidesign" && (
          <CardMedia sx={{ height: 210 }} image={uidesignWork} title="VIP" />
        )}
        {props.img === "ecommerce" && (
          <CardMedia sx={{ height: 220 }} image={ecommerce} title="VIP" />
        )}
        {props.img === "digitalmarketing" && (
          <CardMedia
            sx={{ height: 180 }}
            image={digitalmarketing}
            title="VIP"
          />
        )}
        {props.img === "customerservice" && (
          <CardMedia sx={{ height: 210 }} image={customerservice} title="VIP" />
        )}
        {props.img === "landing" && (
          <CardMedia sx={{ height: 210 }} image={LandingPage} title="VIP" />
        )}
        {props.img === "shortFormVideo" && (
          <CardMedia sx={{ height: 210 }} image={shortFormVideo} title="VIP" />
        )} */}

        <CardContent>
          {props.btn && (
            <CardActions>
              <button
                title="Click to Fill Form and Book a Meeting Online"
                style={{
                  backgroundColor: "#ffa800",
                  border: "1px solid #ffa800",
                  borderRadius: "2px",
                  fontWeight: "bold",
                  fontSize: btnSize,
                  color: "black !important",
                }}
                onClick={bookOnlineHandler}
              >
                {props.btn}
              </button>
            </CardActions>
          )}
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", marginTop: 1, color: "white" }}
          >
            {props.heading}
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{ marginTop: 1, color: "white" }}
          >
            {props.ul}
          </Typography>
          {props.price === "54,000 PKR" || props.price === "350 $ / month" ? (
            <Typography
              variant="h5"
              component="div"
              sx={
                window.innerWidth > 600
                  ? { fontWeight: "bold", marginTop: "65%", color: "white" }
                  : { fontWeight: "bold", marginTop: "0%", color: "white" }
              }
            >
              {props.price}
            </Typography>
          ) : props.price === "70,000 PKR" || props.price === "450 $" ? (
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "30%", color: "white" }}
            >
              {props.price}
            </Typography>
          ) : props.price === "80,000 PKR" ||
            props.price === "600 $ - 800 $" ? (
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "85%", color: "white" }}
            >
              {props.price}
            </Typography>
          ) : props.price === "60,000 PKR" || props.price === "400 $" ? (
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "31%", color: "white" }}
            >
              {props.price}
            </Typography>
          ) : props.price === "140,000 PKR" ? (
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", marginTop: "45%", color: "white" }}
            >
              {props.price}
            </Typography>
          ) : (
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", marginTop: 1, color: "white" }}
            >
              {props.price}
            </Typography>
          )}

          <CardActions>
            <Button
              title="Click to Fill Form and Book a Meeting Online"
              size="large"
              onClick={bookOnlineHandler}
              className={style.bookBtn}
            >
              {props.price ? "Book Now" : "Book Consultation"}
              {/* <KeyboardDoubleArrowRightIcon /> */}
            </Button>
          </CardActions>
          {bookCons && (
            <Modal onCalenderClose={calenderCloseHandler}>
              <div
                style={{
                  color: "black",
                  backgroundColor: "white",
                  padding: "2%",
                  borderRadius: "30px",
                  textAlign: "center",
                }}
              >
                <CalendarUI onBook={bookNowHandler} />
              </div>
            </Modal>
          )}
          {props.rm && (
            <>
              <CardActions>
                <Button size="small" onClick={readMoreHandler}>
                  {readmoreValue}
                  <KeyboardDoubleArrowRightIcon />
                </Button>
              </CardActions>
              {readmore && (
                <>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{ marginTop: 1, color: "white" }}
                  >
                    {props.read ? props.read : "Coming Soon"}
                    <br />
                    <br />
                    {props.read2 ? props.read2 : ""}
                  </Typography>
                </>
              )}
            </>
          )}
        </CardContent>
      </Card>
      {alert && (
        <Alert severity="success"> Your Appointment Booked Successfuly-!</Alert>
      )}
    </div>
  );
}

export default CardWork;

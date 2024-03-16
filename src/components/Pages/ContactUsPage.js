import React, { useEffect, useState } from "react";
import style from "./ContactUsPage.module.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PhoneInput from "react-phone-number-input";
import { Alert, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import contactBack from "../assets/contactBack.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import sample from "../assets/contactVideo.mp4";
// import ReactGA from "react-ga";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [budget, setBudget] = useState("");
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const businessChangeHandler = (e) => {
    setBusiness(e.target.value);
  };
  const budgetChangeHandler = (e) => {
    setBudget(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2500);

    // ReactGA.event({
    //   category: "User Interaction", // The category of the event
    //   action: "Submitted at Contact", // The action associated with the event
    //   label: "Button Label", // An optional label to provide more context
    // });

    let EMAIL_DATA;
    if (email === "") {
      EMAIL_DATA = {
        from_name: "Optimal X Contact",
        to_name: "CEO, Optimal X",
        message: `Name: ${name}
        Phone Number: ${phone}
        Business Type: ${business}
        Budget: ${budget}`,
      };
    } else {
      EMAIL_DATA = {
        from_name: "Optimal X Contact",
        to_name: "CEO, Optimal X",
        message: `Name: ${name}
            Phone Number: ${phone}
            E-mail: ${email}
            Business Type: ${business}
            Budget: ${budget}`,
      };
    }
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
    setName("");
    setEmail("");
    setBudget("");
    setBusiness("");
    setPhone("");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Contact");
  }, []);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className={style.main}>
      {/* <video className={style.videoUI} autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      <img src={contactBack} alt="" className={style.videoUI} />
      <Box className={style.mainBox}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <h1 className={style.heading}>OPTIMAL X</h1>
            <p className={style.text}>"Get in Touch with Us Today" </p>
            <div className={style.icons_div}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <form className={style.form} onSubmit={submitHandler}>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={name}
                onChange={nameChangeHandler}
                required
                InputLabelProps={{
                  style: {
                    color: "rgb(229, 229, 229)",
                  },
                }}
                InputProps={{
                  style: {
                    color: "rgb(229, 229, 229)", // Change input text color here
                    borderBottom: "1px solid rgb(229, 229, 229)",
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Business Type"
                variant="standard"
                value={business}
                onChange={businessChangeHandler}
                required
                InputLabelProps={{
                  style: {
                    color: "rgb(229, 229, 229)",
                  },
                }}
                InputProps={{
                  style: {
                    color: "rgb(229, 229, 229)", // Change input text color here
                    borderBottom: "1px solid rgb(229, 229, 229)",
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Budget"
                variant="standard"
                value={budget}
                onChange={budgetChangeHandler}
                InputLabelProps={{
                  style: {
                    color: "rgb(229, 229, 229)",
                  },
                }}
                InputProps={{
                  style: {
                    color: "rgb(229, 229, 229)", // Change input text color here
                    borderBottom: "1px solid rgb(229, 229, 229)",
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Email (Optional)"
                type={"email"}
                variant="standard"
                value={email}
                onChange={emailChangeHandler}
                InputLabelProps={{
                  style: {
                    color: "rgb(229, 229, 229)",
                  },
                }}
                InputProps={{
                  style: {
                    color: "rgb(229, 229, 229)", // Change input text color here
                    borderBottom: "1px solid rgb(229, 229, 229)",
                  },
                }}
              />
              <br />
              <br />
              <PhoneInput
                className={style.phone}
                placeholder="Phone"
                value={phone}
                onChange={setPhone}
                required
              />
              <br />
              <br />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type={"submit"}
              >
                Send
              </Button>
            </form>
            {alert && (
              <Alert severity="success">
                {" "}
                Your Kind Message Sent Successfuly-!
              </Alert>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactPage;

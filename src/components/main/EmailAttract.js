import React, { useState } from "react";
import style from "./EmailAttract.module.css";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { motion } from "framer-motion";
import Modal from "../UI/Modal";
import CalendarUI from "../UI/CalendarUI";
import { Alert } from "@mui/material";
import emailjs from "@emailjs/browser";
import dayjs from "dayjs";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function EmailAttract() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [calendarShow, setCalendarShow] = useState(false);
  const [alert, setAlert] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setCalendarShow(true);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const calenderCloseHandler = () => {
    setCalendarShow(false);
  };

  const bookNowHandler = (dateValue, timeValue, nameValue, phoneValue) => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2500);

    setTimeout(() => {
      setCalendarShow(false);
    }, 100);

    const EMAIL_DATA = {
      from_name: "Optimal X Home (Free Consultation)",
      to_name: "CEO, Optimal X",
      message: `Name: ${nameValue}
      Phone Number:${phoneValue}
      Email: ${email ? email : "(Not Given)"}
      Service: (Call to Confirm)
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
    setEmail("");
    setPhone("");
  };

  return (
    <div className={style.main}>
      <div className={style.second}>
        <div>
          <DoubleArrowIcon
            sx={{
              marginTop: "-8px",
              marginRight: "10px",
              color: "#ffa800",
              fontSize: "larger",
            }}
          />
        </div>
        <div>
          <b>Submit</b> your Email & Phone Number to Book a Free Consultaion.
        </div>
      </div>
      <form className={style.form} onSubmit={submitHandler}>
        <input
          placeholder="EMAIL"
          type={"email"}
          className={style.email}
          value={email}
          onChange={emailChangeHandler}
        />
        <PhoneInput
          className={style.phone}
          placeholder="Phone"
          value={phone}
          onChange={setPhone}
        />
        <button
          type="submit"
          className={style.button}
        >
          <span>Free Consultation</span>
        </button>
        {alert && (
          <Alert severity="success" sx={{ borderRadius: "20px" }}>
            {" "}
            Your Appointment Booked Successfuly-!
          </Alert>
        )}
        {calendarShow && (
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
              <CalendarUI onBook={bookNowHandler} phone={phone} />
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
}

export default EmailAttract;

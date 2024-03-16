import React, { useState } from "react";
import style from "./Discuss.module.css";

import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import { motion } from "framer-motion";

function Discuss() {
  const [alert, setAlert] = useState(false);
  const [idea, setIdea] = useState("");

  const goTopHandler = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const ideaChangeHandler = (e) => {
    setIdea(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2500);

    const EMAIL_DATA = {
      from_name: "Optimal X Idea",
      to_name: "CEO, Optimal X",
      message: `Idea:${idea}`,
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

  return (
    <div className={style.main}>
      <div className={style.inner}>
        <div className={style.inner2}>
          <h1>Let's discuss the Idea</h1>
          <p>
            Let's dive into Your Idea!.You Provide Your Idea. Our services are
            tailored to bring your vision to life with creativity, expertise,
            and exceptional results. Our Team is Ready to Listen to Your Idea.
          </p>
          <form
            className={style.form}
            onSubmit={submitHandler}
            // action={`mailto:info.optimalmarketing@gmail.com?subject=My%20Idea&body=${idea}`}
            method={"post"}
            // enctype={"text/plain"}
          >
            <input
              placeholder="Your Idea"
              value={idea}
              onChange={ideaChangeHandler}
              type={"text"}
              required
            />
            <button type={"submit"} className={style.sendBtn}>
              Send
            </button>
          </form>
          {alert && (
            <Alert severity="success" sx={{ width: "80%", margin: "auto" }}>
              {" "}
              Your Idea Sent Successfuly-!
            </Alert>
          )}
        </div>
      </div>
      <div className={style.actions}>
        <button
          className={style.btnTop}
          onClick={goTopHandler}
        >
          Go to Top
          <ArrowDropUpIcon />
        </button>
      </div>
    </div>
  );
}

export default Discuss;

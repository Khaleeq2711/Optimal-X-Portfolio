import * as React from "react";
import style from "../Cards/CardWork.module.css";
import style2 from "./CalendarUI.module.css";

import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function CalendarUI(props) {
  const [date, setDate] = React.useState(dayjs());
  const [time, setTime] = React.useState(
    dayjs().set("hour", 17).startOf("hour")
  );
  const [phone, setPhone] = React.useState(props.phone ? props.phone : "");
  const [name, setName] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onBook(date, time, name, phone);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form className={style2.form} onSubmit={submitHandler}>
        <input
          placeholder="Name"
          type={"text"}
          className={style2.email}
          value={name}
          onChange={nameHandler}
          required
        />
        <PhoneInput
          className={style2.phone}
          placeholder="Phone"
          value={phone}
          onChange={setPhone}
          required
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateRangeCalendar", "DateRangeCalendar"]}
          >
            <Grid
              container
              columns={{ xs: 1, lg: 2 }}
              spacing={4}
              sx={{ marginTop: "2vh" }}
            >
              <Grid item>
                <h4 title="Please Choose Date" style={{ textAlign: "left" }}>
                  Date
                </h4>
                <DateCalendar
                  sx={{ color: "black ", marginLeft: "-10%" }}
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </Grid>

              <Grid item sx={{ marginLeft: "-10%" }}>
                <h3 title="Please Choose Time" style={{ textAlign: "left" }}>
                  Time
                </h3>
                <TimeClock
                  sx={{ color: "black " }}
                  value={time}
                  onChange={(newTime) => setTime(newTime)}
                />{" "}
                <div>
                  <button
                    title="Click to Book Meeting"
                    type="submit"
                    className={style.bookBtn}
                  >
                    Book Now
                  </button>
                </div>
              </Grid>
            </Grid>
          </DemoContainer>
        </LocalizationProvider>
      </form>
    </>
  );
}

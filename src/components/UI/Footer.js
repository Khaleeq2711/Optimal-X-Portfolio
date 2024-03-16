import React from "react";
import style from "./Footer.module.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={style.footer}>
      <hr
        data-aos="fade-out"
        data-aos-offset="300"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine"
      />
      <Box
        sx={{
          width: "96%",
          maxWidth: "96%",
          padding: "2%",
        }}
      >
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <ul>
              <li
                style={{
                  fontSize: "larger",
                  fontWeight: "bold",
                }}
                className={style.yellow}
              >
                Company
              </li>
              <li>
                <NavLink
                  to={"/About"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/About"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/About"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <ul>
              <li
                style={{ fontSize: "larger", fontWeight: "bold" }}
                className={style.yellow}
              >
                Services
              </li>
              <li>
                <NavLink
                  to={"/Branding"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Personal Branding
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Webservice"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Web Applications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Digital"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Digital Marketing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Mobile"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Mobile Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Designing"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  UI/UX Designing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/ECommerce"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  E-Commerce
                </NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <ul>
              <li
                style={{ fontSize: "larger", fontWeight: "bold" }}
                className={style.yellow}
              >
                Resources
              </li>
              <li>
                <NavLink
                  to={"/Blog"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Newsletter"}
                  className={({ isActive }) =>
                    isActive ? style.active : undefined
                  }
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  News Letter
                </NavLink>
              </li>
            </ul>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={6}>
            <ul>
              <li
                style={{ fontSize: "larger", fontWeight: "bold" }}
                className={style.yellow}
              >
                Follow Us
              </li>
              <li>
                {" "}
                <Link
                  href={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Linked In
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            sx={{ textAlign: "center", fontFamily: "Jacques Francois" }}
          >
            <p
              style={{
                fontSize: "50px",
                minWidth: "max-content",
                color: "#ffb800",
              }}
            >
              OPTIMAL X
            </p>
            <div style={{ display: "flex" }}>
              <HomeIcon />
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                }}
              >
                -Shop # 1 Street # 04, H13,Islamabad, 44000
              </p>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  minWidth: "max-content",
                  textAlign: "left",
                }}
              >
                <PhoneIcon /> +92 317-5371236
              </p>
              <p
                style={{
                  fontSize: "20px",
                  minWidth: "max-content",
                  textAlign: "left",
                }}
              >
                <PhoneIcon /> +92 51-2717414
              </p>
            </div>
            <iframe
              title="VIP"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4617.178705172004!2d72.97874215749741!3d33.640707739359314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97433c34e075%3A0x323ddd48e40d145d!2sOptimal%20Marketing!5e0!3m2!1sen!2sus!4v1695124903124!5m2!1sen!2sus"
              className={style.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* <h3>Get Latest Update</h3>
            <form className={style.form} onSubmit={submitHandler}>
              <input placeholder="Your Email" type={"email"} />
            </form> */}
          </Grid>
        </Grid>
      </Box>
      <p style={{ textAlign: "center" }}>© 2023 OPTIMAL X.</p>
    </div>
  );
}

export default Footer;

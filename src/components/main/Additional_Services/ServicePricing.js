import React from "react";
import style from "./ServicePricing.module.css";

// import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardWork from "../../Cards/CardWork";

function ServicePricing(props) {
  return (
    <Box
      sx={{
        width: "95%",
        padding: "1%",
        margin: "auto",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={12} xs={12}>
          <h1
            // data-aos="fade-down-right"
            style={{
              marginLeft: "2%",
              marginBottom: "4%",
              lineHeight: "50px",
              fontFamily: "Agrandir",
            }}
          >
            <span className={style.yellow}></span>Identify your Business
          </h1>
        </Grid>
        {props?.pricing?.map((c) => {
          return (
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{ padding: "1%" }}
              key={c.img}
            >
              <CardWork
                heading={c.heading}
                btn={c.btn}
                key={c.img}
                price={c.price}
                ul={c.ul}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ServicePricing;

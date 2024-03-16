import React from "react";
import style from "./OtherServices.module.css";

// import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../../Cards/Card";

function AdditionalServices(props) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1%",
        margin: "auto",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={12} xs={12}>
          <h1
            // data-aos="fade-down-right"
            style={{
              marginLeft: "4%",
              marginBottom: "4%",
              lineHeight: "50px",
              fontFamily: "Agrandir",
            }}
          >
            <span className={style.yellow}>Other</span> Services for You
          </h1>
        </Grid>
        {props?.data?.map((c) => {
          return (
            <Grid item lg={4} md={6} sm={12} xs={12} key={c.heading}>
              <Card
                logo={c.logo}
                heading={c.heading}
                description={c.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default AdditionalServices;

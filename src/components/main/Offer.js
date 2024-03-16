import React from "react";
import style from "./Offer.module.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../Cards/Card";

function Offer() {
  const cardData = [
    // {
    //   logo: "Branding",
    //   heading: "Branding",
    //   description:
    //     "Elevate your Brand's Perception: Crafting a Unique Identity That Captivates and Connects.",
    // },
    {
      logo: "Web",
      heading: "Web Redesign",
      description:
        "Elevate your online presence with intuitive and scalable Web Applications, bridging the gap between your business goals and user satisfaction.",
    },
    {
      logo: "Digital",
      heading: "Digital Marketing & SEO",
      description:
        "Elevating brands in the digital world through quality content creation & campaigns that generate results & revenue.",
    },
    {
      logo: "Mobile",
      heading: "Short Form Content",
      description:
        "During an era of minimal attention spans short form content can grab all the attention you need for your brand- coupled with a carefully curated customer journey the potential is limitless",
    },
    // {
    //   logo: "Testing",
    //   heading: "Graphics Design",
    //   description:
    //     "Elevating design aesthetics through the expertise of Pakistan's foremost graphic artists and innovators.",
    // },
    //Design Excellence by Pakistan Leading Industry Professionals.
    {
      logo: "SEO",
      heading: "E-Commerce Consultation",
      description:
        "At Optimal X, we decide what is best for our clients by carefully analyzing and optimizing every part of Sales & Marketing Process at your Company.",
    },
  ];

  return (
    <div className={style.offer}>
      <div className={style.mainHeading}>WE OFFER</div>
      <Box sx={{ width: "100%", marginTop: "1%", paddingBottom: "2%" }}>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {cardData.map((c) => {
            return (
              <Grid item lg={6} md={6} sm={12} key={c.heading}>
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
    </div>
  );
}

export default Offer;

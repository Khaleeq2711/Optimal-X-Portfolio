import React from "react";
import CardReview from "../Cards/CardReview";

import style from "./Reviews.module.css";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Slider from "react-slick";

function Reviews() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const DEMO = [
    {
      heading: "Drew Stark",
      subHeading: "USA",
      review:
        "Exceptional branding services! You Guyz have a knack for turning concepts into captivating brand identities⭐️⭐️ Highly recommended.",
    },
    {
      heading: "Kristine",
      subHeading: "Philippines",
      review:
        "My website is deployed today!. Just wanna Say Great Work Guyz🤍🤍",
    },
    {
      heading: "Saad Ali",
      subHeading: "Pakistan",
      review:
        "Outstanding web application development! Their solutions are innovative, user-friendly, and tailored to our specific needs. Impressed with their expertise!❤️",
    },
    {
      heading: "Farzad",
      subHeading: "Iran",
      review:
        "These folks are the e-commerce whisperers. They know all the cool tricks to make your online business thrive.",
    },
    {
      heading: "Lisa M.",
      subHeading: "South Korea",
      review:
        "Graphic design pros ‼️ Our Dreams have turned into visual masterpieces. Seriously, our brand has never looked this cool",
    },
    {
      heading: "John H.",
      subHeading: "USA",
      review:
        "I had an amazing experience with this company! .And the product exceeded my expectations.",
    },
    {
      heading: "Sophia",
      subHeading: "Canada",
      review:
        " I highly recommend them to anyone looking for quality products and excellent service.❤️",
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.header}>
        <h1 className={style.yellow}>
          Hear What our Customer Says <span style={{color:'yellow', fontWeight:'bold'}}>:)</span>
        </h1>
        <div className={style.actions}></div>
      </div>
      <div style={{ padding: "30px" }}>
        <Slider {...settings}>
          {DEMO.map((r) => {
            return (
              <CardReview
                key={r.heading}
                heading={r.heading}
                subHeading={r.subHeading}
                review={r.review}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;

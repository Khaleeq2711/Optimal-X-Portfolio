import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";


const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

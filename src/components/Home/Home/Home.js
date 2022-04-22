import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Testomonials from "../Testomonials/Testomonials";
import Featured from "../Featured/Featured";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <HomeServices />
      <AboutUs />
      <Featured />
      <Testomonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

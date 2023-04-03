import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import CartModal from "../Components/CartModal";
const Home = () => {
  return (
    <>
      <div className="store-cont">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
        <div className="nav-cont">
          <Navbar />
        </div>
        <div className="slider-cont">
          <Slider />
        </div>
        <CartModal />
      </div>
    </>
  );
};

export default Home;

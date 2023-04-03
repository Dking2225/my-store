import React from "react";
import Navbar from "../Components/Navbar";

const SingleProduct = () => {
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
        <div className="single-product-cont">
          <div className="single-product-left-cont">
            <div className="home-btn">
              <a href="#">
                Home/ <span>Product</span>
              </a>
            </div>
            <div className="main-image-cont">
              <img src="./images/image1.png" alt="" />
            </div>
            <div className="slider-image-cont">
              <img src="./images/image1.png" alt="" />
              <img src="./images/image1.png" alt="" />
              <img src="./images/image1.png" alt="" />
            </div>
          </div>
          <div className="single-product-right-cont">
            <div className="rect-gradient-top"></div>
            <div className="product-content-cont">
              <h1>product</h1>
              <p>
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </p>
              <div className="quantity">
                <h1>quantity</h1>
                <div className="quantity-input">1</div>
              </div>
              <div className="total">
                <h1>total</h1>
                <h1>$100</h1>
              </div>
              <div className="add-to-cart-btn">Add to cart</div>
            </div>
            <div className="rect-gradient-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

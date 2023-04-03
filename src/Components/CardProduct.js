import React from "react";
import { useState, useRef } from "react";
import { useGlobalContext } from "../context";

const CardProduct = ({ img, name, price }) => {
  const { addToCart } = useGlobalContext();
  const nameRef = useRef();
  return (
    <div className="card-cont ">
      <div className="image-cont">
        <img src={img} alt="" />
      </div>
      <div className="card-info-cont">
        <h1 className="product-text" ref={nameRef}>
          {name}
        </h1>
        <h1 className="product-price">{price}</h1>
        <button className="addCart-btn" onClick={() => addToCart(nameRef)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CardProduct;

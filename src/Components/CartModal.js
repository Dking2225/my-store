import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { RiAddFill } from "react-icons/ri";
import { TbMinus } from "react-icons/tb";
import { useGlobalContext } from "../context";

const CartModal = () => {
  const { isCartOpen, closeCart, cartProducts } = useGlobalContext();
  // console.log(cartProducts.length);
  console.log(cartProducts);

  return (
    <>
      <div
        className={`${
          isCartOpen
            ? "cart-parentContainer show-cart-container"
            : "cart-parentContainer"
        }`}
      >
        <div className="cartModal-cont">
          {cartProducts.length > 0
            ? cartProducts.map((product, index) => {
                const { img, name, price, quantity } = product[0];
                console.log(product);
                console.log(quantity);
                // console.log(product[0] && product[0].name);
                // console.log(product);
                return (
                  <div key={index} className="cart-item-cont">
                    <div className="item-img">
                      <img src={product[0] && img} alt="" />
                    </div>
                    <div className="item-right-content">
                      <h1> {product[0] && name}</h1>
                      <h1>{product[0] && price}</h1>
                      <div className="quantity-cont">
                        <div className="minus-icon">
                          <TbMinus />
                        </div>
                        <h1>{quantity}</h1>
                        <div className="plus-icon">
                          <RiAddFill />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="cartModal-gradient-top">
          <div className="close-icon" onClick={closeCart}>
            <GrLinkNext />
          </div>
          <div className="cart-label">
            <h1>Cart</h1>
          </div>
        </div>
        <div className="cartModal-gradient-bottom"></div>
      </div>
    </>
  );
};

export default CartModal;

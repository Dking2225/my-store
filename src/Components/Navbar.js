import React from "react";
import { BsSearch } from "react-icons/bs";
import { RiUser4Fill } from "react-icons/ri";
import { BsFillHandbagFill } from "react-icons/bs";
import { useGlobalContext } from "../context";
import { products } from "../data";

const Navbar = () => {
  const { openCart, searchValue, searchProduct } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="nav-title">
        <h1>Pula</h1>
        <h2>flower shop</h2>
      </div>
      <div className="nav-menu">
        <div className="shop">
          <a href="#">shop</a>
        </div>
        <div className="about">
          <a href="#">about</a>
        </div>
        <div className="faq">
          <a href="#">faq</a>
        </div>
        <div className="contact">
          <a href="#">contact</a>
        </div>
      </div>
      <div className="nav-feature">
        <div className="search-cont">
          <div className="search-icon">
            <BsSearch />
          </div>
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-bar">
              {/* <label htmlFor="name">Search</label> */}
              <input
                className="search-bar"
                placeholder="Search"
                type="text"
                name="name"
                id="name"
                ref={searchValue}
                onChange={searchProduct}
              />
            </div>
          </form>

          {/* <div className="search-bar">Search</div> */}
        </div>
        <div className="login-cont">
          <div className="login-icon">
            <RiUser4Fill />
          </div>
          <div className="login">
            <a href="#">login</a>
          </div>
        </div>
        <div className="cart-cont">
          <div className="cart-icon" onClick={openCart}>
            <BsFillHandbagFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

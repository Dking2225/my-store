import React, { useState, useContext, useEffect } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";
import CardProduct from "./Components/CardProduct";
import { products } from "./data";
import paginate from "./utils";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [page, setPage] = useState(0);
  const searchValue = React.useRef("");
  const [searchVal, setSearchVal] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  // const [change, setChange] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const newProducts = [];
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setdata] = useState(paginate(products));
  //   console.log(data);
  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      console.log(nextPage);
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      console.log(prevPage);
      return prevPage;
    });
  };
  const handlePage = (index) => {
    setPage(index);
    console.log(index);
  };
  //right away after loading check cartproducts and delete the
  //empty one

  const addToCart = (item) => {
    //checks data file to find the selected product
    // check if the item is already in the cart array
    const filteredProducts = products.filter((product) => {
      return product.name == item.current.innerHTML;
    });
    console.log(filteredProducts);
    isDuplicate(filteredProducts);

    // setFilteredProducts(
    //   products.filter((product) => product.name == item.current.innerHTML)
    // );

    // console.log("clicked add");
  };
  cartProducts.map((x, index) => {
    if (x.length == 0) {
      cartProducts.splice(index, 1);
    }
  });

  function isDuplicate(newItem) {
    // console.log("running duplicate");
    // if cart array is empty then add to cart array
    // console.log(cartProducts.length);
    // console.log(newItem[0].name);
    let josh = newItem[0].name;
    // console.log(josh + "this is josh");
    // console.log(filteredProducts[0].name);
    // console.log(filteredProducts[0].quantity);
    if (cartProducts.length == 0) {
      // console.log(filteredProducts[0].name);
      // console.log(filteredProducts[0].quantity);
      setCartProducts([newItem]);
      // setCartProducts(...cartProducts);
      console.log(cartProducts);
    } else {
      // console.log(cartProduct)
      const found = cartProducts.find((cartProduct) => {
        console.log(cartProduct[0].name + "this is cart product");
        console.log(newItem[0].name + "this is name");
        return cartProduct[0].name == newItem[0].name;
      });
      console.log(found);
      if (found == undefined) {
        setCartProducts([...cartProducts, newItem]);
      } else {
        console.log(newItem.name);
        for (let i = 0; i < cartProducts.length; i++) {
          console.log(cartProducts[i][0].quantity);
          if (cartProducts[i][0].name == newItem[0].name) {
            console.log(cartProducts[i].quantity + "this is quantity");
            cartProducts[i][0].quantity = cartProducts[i][0].quantity + 1;
            break;
          }
        }
        setCartProducts([...cartProducts]);
      }
    }
  }

  function searchProduct() {
    console.log(searchValue.current.value);
    setSearchVal(searchValue.current.value);
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchValue.current.value);
    });
    setdata(paginate(filteredProducts));

    console.log(data);
  }

  return (
    <AppContext.Provider
      value={{
        openCart,
        closeCart,
        isCartOpen,
        nextPage,
        prevPage,
        handlePage,
        data,
        page,
        searchProduct,
        searchValue,
        newProducts,
        searchVal,
        setPage,
        addToCart,
        cartProducts,
        quantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

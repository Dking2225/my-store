import React from "react";
import { GrHelp, GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { useGlobalContext } from "../context";
// import { products } from "../data";
import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

const Slider = () => {
  // console.log(products.length);
  const { nextPage, prevPage, handlePage, data, page, searchVal, setPage } =
    useGlobalContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data[page]);
    console.log("hello");
  }, [page]);
  useEffect(() => {
    if (searchVal) {
      console.log("hi");
      setPage(0);
      setProducts(data[page]);
    } else {
      setProducts(data[page]);
    }
  }, [searchVal]);

  return (
    <>
      {products ? (
        products.map((product) => {
          return <CardProduct key={product.id} {...product} />;
        })
      ) : (
        <h2 className="empty-search">Please search again! Nothing found...</h2>
      )}

      {products ? (
        <div className="pagination-cont">
          <div className="prev" onClick={prevPage}>
            <GrLinkPrevious />
          </div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </div>
            );
          })}

          <div className="next" onClick={nextPage}>
            <GrLinkNext />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Slider;

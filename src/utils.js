const paginate = (products) => {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);

  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });
  //   console.log(newFollowers);
  return newProducts;
};

export default paginate;

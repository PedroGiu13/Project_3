const Product = require("./products");

const getProductList = async (req, res) => {
  const productList = await Product.findAll();
  res.send(productList);
};

module.exports = { getProductList };

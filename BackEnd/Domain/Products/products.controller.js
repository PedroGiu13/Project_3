const Product = require("./products");
const { errorHandler } = require("../../helpers/errorHandler");

const getProductList = async (req, res) => {
  try {
    const productList = await Product.findAll();
    res.send(productList);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports = { getProductList };

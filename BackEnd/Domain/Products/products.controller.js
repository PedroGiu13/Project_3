let productList = require('./productList-db');

const getProductList = (req, res) => {
    res.send(productList)
  };

module.exports = {getProductList}
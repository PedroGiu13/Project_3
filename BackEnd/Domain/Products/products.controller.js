const Product = require('./products');

const getProductList = async (req, res) => {
   const productList = await Product.findAll();
   console.log('Aca van los productos', productList);
   res.send(productList);
  };

module.exports = {getProductList}
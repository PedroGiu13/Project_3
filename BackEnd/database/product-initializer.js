const Product = require("../Domain/Products/products");

const productMigrate = () => {
  productList.forEach((element) => {
    Product.create(element);
  });
};

let productList = [
  {
    image: "db_assets/product-1.png",
    name: "Nicaragua",
    price: 330,
  },
  {
    image: "db_assets/product-2.png",
    name: "Colombia",
    price: 300,
  },
  {
    image: "db_assets/product-3.png",
    name: "Peru",
    price: 300,
  },
];

module.exports = productMigrate;

const express = require("express");
const { route } = require("../Reviews/routes");
const router = express.Router();

let productList = require('./menuList-db');

const getProductList = (req, res) => {
    res.send(productList)
  };

router.get('/', getProductList);

module.exports = router
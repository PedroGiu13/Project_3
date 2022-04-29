const express = require("express");
const router = express.Router();
const { getProductList } = require("./products.controller");

router.get("/", getProductList);

module.exports = router;

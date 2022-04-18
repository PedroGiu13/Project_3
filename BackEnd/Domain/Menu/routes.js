const express = require("express");
const router = express.Router();

let menuList = require("./menuList-db");

const getMenuList = (req, res) => {
  res.send(menuList);
};



router.get("/", getMenuList);

module.exports = router;

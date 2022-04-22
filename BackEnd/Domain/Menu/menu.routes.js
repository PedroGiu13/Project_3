const express = require("express");
const router = express.Router();
const { getMenuList } = require("./menu.controller");

router.get("/", getMenuList);

module.exports = router;

const express = require("express");
const router = express.Router();

const { loginCtrl, registerCtrl } = require("./auth.controller");

router.post("/login", loginCtrl);

router.post("/register", registerCtrl);

module.exports = router;

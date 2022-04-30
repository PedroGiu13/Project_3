const express = require("express");
const router = express.Router();
const checkAuth = require ("../../middleware/auth");
const checkRolAuth = require('../../middleware/roleAuth');

const { loginCtrl, registerCtrl, getUsers } = require("./auth.controller");

router.post("/login", loginCtrl);

router.post("/register", registerCtrl);

router.get("/users", checkAuth, checkRolAuth(['admin']), getUsers);

module.exports = router;

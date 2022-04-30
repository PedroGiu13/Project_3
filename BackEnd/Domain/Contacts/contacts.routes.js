const express = require("express");
const router = express.Router();
const { addContactList } = require("./contacts.contoller");

router.post("/", addContactList);

module.exports = router;

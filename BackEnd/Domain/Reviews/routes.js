const express = require("express");
const router = express.Router();
const clientList = require('./review-db');

const getClientList = (req, res) => {
    res.send(clientList)
}

router.get('/', getClientList)

module.exports = router
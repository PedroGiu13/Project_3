const express = require("express");
const router = express.Router();

let contactList = require('./contact-db');

const addContactList = (req, res) => {
    let newContact = req.body;

    contactList.push(newContact);
    res.send(newContact);
};

router.post('/', addContactList);

module.exports = router;


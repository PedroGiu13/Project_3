let contactList = require("./contact-db");

const addContactList = (req, res) => {
  let newContact = req.body;

  contactList.push(newContact);
  res.send(newContact);
};

module.exports = { addContactList };

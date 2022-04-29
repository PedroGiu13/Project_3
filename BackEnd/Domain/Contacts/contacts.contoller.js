const Contacts = require("./contacts");

const addContactList = async (req, res) => {
  const { name, lastName, mail, phone, message } = req.body;

  const newMessage = await Contacts.create({
    first_name: name,
    last_name: lastName,
    email: mail,
    message: message,
    phone: phone,
  });
  res.send(newMessage);
};

module.exports = { addContactList };

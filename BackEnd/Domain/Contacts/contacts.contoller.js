const Contacts = require("./contacts");
const errorHandler = require("../../helpers/errorHandler");

const addContactList = async (req, res) => {
  try {
    const { name, lastName, mail, phone, message } = req.body;

    const newMessage = await Contacts.create({
      first_name: name,
      last_name: lastName,
      email: mail,
      message: message,
      phone: phone,
    });

    res.send(newMessage);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports = { addContactList };

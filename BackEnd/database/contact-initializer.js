const Contacts = require("../Domain/Contacts/contacts");

const contactsMigrate = () => {
  contactList.forEach((element) => {
    Contacts.create(element);
  });
};

let contactList = [
  {
    id: "1",
    first_name: "Sergio",
    last_name: "Ramos",
    email: "sr@gmail.com",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam accusamus! Dignissimos vel rem voluptatibus.",
    phone: 1234546,
  },
  {
    id: "2",
    first_name: "Luis",
    last_name: "Suarez",
    email: "luisito@gmail.com",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam accusamus! Dignissimos vel rem voluptatibus.",
    phone: 98765432,
  },
];

module.exports = contactsMigrate;

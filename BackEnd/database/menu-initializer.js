const Menu = require("../Domain/Menu/menu");

const menuMigrate = () => {
  menuList.forEach((element) => {
    Menu.create(element);
  });
};

let menuList = [
  {
    image: "db_assets/menu-1.png",
    name: "Espresso",
    price: 70,
  },
  {
    image: "db_assets/menu-2.png",
    name: "Doble Espresso",
    price: 90,
  },
  {
    image: "db_assets/menu-3.png",
    name: "Capuccino",
    price: 130,
  },
  {
    image: "db_assets/menu-4.png",
    name: "Latte",
    price: 140,
  },
  {
    image: "db_assets/menu-5.png",
    name: "Flat White",
    price: 115,
  },
  {
    image: "db_assets/menu-6.png",
    name: "Cold Latte",
    price: 140,
  },
];

module.exports = menuMigrate;

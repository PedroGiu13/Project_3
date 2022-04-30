const Menu = require("../Domain/Menu/menu");

const menuMigrate = () => {
  menuList.forEach((element) => {
    Menu.create(element);
  });
};

let menuList = [
  {
    id: "1",
    image: "db_assets/menu-1.png",
    name: "Espresso",
    price: 70,
  },
  {
    id: "2",
    image: "db_assets/menu-2.png",
    name: "Doble Espresso",
    price: 90,
  },
  {
    id: "3",
    image: "db_assets/menu-3.png",
    name: "Capuccino",
    price: 130,
  },
  {
    id: "4",
    image: "db_assets/menu-4.png",
    name: "Latte",
    price: 140,
  },
  {
    id: "5",
    image: "db_assets/menu-5.png",
    name: "Flat White",
    price: 115,
  },
  {
    id: "6",
    image: "db_assets/menu-6.png",
    name: "Cold Latte",
    price: 140,
  },
];

module.exports = menuMigrate;

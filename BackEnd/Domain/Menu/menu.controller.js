const Menu = require("./menu");

const getMenuList = async (req, res) => {
  const menuList = await Menu.findAll();
  res.send(menuList);
};

module.exports = { getMenuList };

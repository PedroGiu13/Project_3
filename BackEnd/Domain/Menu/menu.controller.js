const Menu = require('./menu')

const getMenuList = async (req, res) => {
  const menuList = await Menu.findAll();
  console.log("Aca va el menu", menuList);
  res.send(menuList);
};

module.exports = { getMenuList };

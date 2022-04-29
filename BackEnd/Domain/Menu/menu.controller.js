const Menu = require("./menu");
const {errorHandler} = require("../../helpers/errorHandler");

const getMenuList = async (req, res) => {
  try {
    const menuList = await Menu.findAll();
    res.send(menuList);
    
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports = { getMenuList };

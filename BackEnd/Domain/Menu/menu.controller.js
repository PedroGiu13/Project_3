let menuList = require("./menuList-db");

const getMenuList = (req, res) => {
  res.send(menuList);
};

module.exports = { getMenuList };

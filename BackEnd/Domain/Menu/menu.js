const sequelize = require("../../database/db");
const { DataTypes, Model } = require("sequelize");

class Menu extends Model {}

Menu.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Menu",
    createdAt: false,
    updatedAt: false,
    tableName: "menu",
  }
);

module.exports = Menu;

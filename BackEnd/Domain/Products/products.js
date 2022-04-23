const sequelize = require("../../database/db");
const { DataTypes, Model } = require("sequelize");

class Product extends Model {}

Product.init(
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
    modelName: "Products",
    createdAt: false,
    updatedAt: false,
    tableName: "product",
  }
);

module.exports = Product;

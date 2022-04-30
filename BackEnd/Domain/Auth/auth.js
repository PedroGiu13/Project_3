const sequelize = require("../../database/db");
const { DataTypes, Model } = require("sequelize");

class Users extends Model {}

Users.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    sequelize,
    modelName: "Users",
    createdAt: false,
    updatedAt: false,
    tableName: "admin",
  }
);

module.exports = Users;

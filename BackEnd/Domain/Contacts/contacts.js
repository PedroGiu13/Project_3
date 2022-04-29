const sequelize = require("../../database/db");
const { DataTypes, Model } = require("sequelize");

class Contacts extends Model {}

Contacts.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Contacts",
    createdAt: false,
    updatedAt: false,
    tableName: "contacts",
  }
);

module.exports = Contacts;

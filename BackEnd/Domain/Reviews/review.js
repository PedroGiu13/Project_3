const sequelize = require("../../database/db");
const { DataTypes, Model } = require("sequelize");

class Reviews extends Model {}

Reviews.init(
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
    calification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Reviews",
    createdAt: false,
    updatedAt: false,
    tableName: "reviews",
  }
);

module.exports = Reviews;

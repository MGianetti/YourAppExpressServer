const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const { CATEGORY_ENUM, MODEL_NAME } = require("./Product.constants");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER(10, 2), allowNull: false },
    category: {
      type: DataTypes.ENUM(CATEGORY_ENUM),
      allowNull: false,
    },
  },
  { sequelize, modelName: MODEL_NAME, timestamps: true }
);

module.exports = Product;

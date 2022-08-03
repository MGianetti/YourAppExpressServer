const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const { MODEL_NAME } = require("./Service.constants");

class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER(10, 2), allowNull: false },
  },
  { sequelize, modelName: MODEL_NAME, timestamps: true }
);

module.exports = Service;

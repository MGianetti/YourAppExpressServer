const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const {
  MODEL_NAME,
  SEX_ENUM,
  DEFAULT_DDI,
  CELL_PHONE_MAX_LENGTH,
} = require("./Clients.constants");

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    ddi: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: DEFAULT_DDI,
    },
    cellphone: {
      type: DataTypes.STRING(CELL_PHONE_MAX_LENGTH),
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM(SEX_ENUM),
      allowNull: true,
      defaultValue: SEX_ENUM[0],
    },
    age: { type: DataTypes.INTEGER, allowNull: true },
  },
  { sequelize, modelName: MODEL_NAME, timestamps: true }
);

module.exports = Client;

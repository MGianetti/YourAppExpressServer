const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const {
  CELL_PHONE_MAX_LENGTH,
  CNPJ_PHONE_MAX_LENGTH,
  CPF_MAX_LENGTH,
  DEFAULT_DDI,
  EMAIL_MAX_LENGTH,
  MODEL_NAME,
} = require("./Professionals.constants");

class Professional extends Model {}

Professional.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    nickname: { type: DataTypes.STRING, allowNull: true },
    ddi: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: DEFAULT_DDI,
    },
    cellphone: {
      type: DataTypes.STRING(CELL_PHONE_MAX_LENGTH),
      allowNull: false,
    },
    email: { type: DataTypes.STRING(EMAIL_MAX_LENGTH), allowNull: false },
    cpf: { type: DataTypes.STRING(CPF_MAX_LENGTH), allowNull: false },
    cnpj: { type: DataTypes.STRING(CNPJ_PHONE_MAX_LENGTH), allowNull: false },
  },
  { sequelize, modelName: MODEL_NAME, timestamps: true }
);

module.exports = Professional;

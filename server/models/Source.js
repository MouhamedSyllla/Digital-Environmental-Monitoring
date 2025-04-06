import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const Source = sequelize.define(
    "Source",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      village_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    },
    {
      tableName: "sources",
      timestamps: true,
    })

export default Source;
import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";

const Region = sequelize.define(
    "Region",
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
    },
    {
        tableName: "regions",
        timestamps: true,
    }
)

export default Region;
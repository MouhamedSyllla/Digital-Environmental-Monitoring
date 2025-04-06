import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";

const Village = sequelize.define(
    "Village",
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
            allowNul: false,
        },
        region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    },
    {
        tableName: "villages",
        timestamps: true,
    }
);

export default Village;
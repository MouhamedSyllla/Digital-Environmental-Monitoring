import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";

const Sensor = sequelize.define(
    "Sensor",
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unit: {
            type: DataTypes.STRING(5),
            allowNull: false,

        },
        status: { 
            type: DataTypes.ENUM("Active", "Inactive"),
            allowNull: false,
            defaultValue: "Active",
        },
        source_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        
    },
    {
        tableName: "sensors",
        timestamps: true,
    }
)

export default Sensor;
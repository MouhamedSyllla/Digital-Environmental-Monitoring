import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
    "User",
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        role: {
          type: DataTypes.ENUM("admin", "operator", "viewer"),
          allowNull: false,
          defaultValue: "viewer",
        },
    },
    {
        tableName: "users",
        timestamps: true,
    }
)

export default User;
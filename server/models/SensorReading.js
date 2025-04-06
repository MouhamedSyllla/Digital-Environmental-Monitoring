import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const SensorReading = sequelize.define(
  "SensorReading",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sensor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    entry_type: {
      type: DataTypes.ENUM("Sensor", "Manual", "Import"),
      allowNull: false,
      defaultValue: "Manual",
    },
  },
  {
    tableName: "sensor-readings",
    timestamps: true,
  }
);

export default SensorReading;

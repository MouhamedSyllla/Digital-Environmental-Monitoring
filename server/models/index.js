import sequelize from "../config/db.js";
import User from "./User.js";
import Region from "./Region.js";
import Village from "./Village.js";
import Source from "./Source.js";
import Sensor from "./Sensor.js";
import SensorReading from "./SensorReading.js";

export { User, Region, Source, Sensor, Village, sequelize, SensorReading };

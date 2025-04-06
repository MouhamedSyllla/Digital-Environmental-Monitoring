import { Sequelize } from "sequelize";
import env from "dotenv";

env.config();

// A new sequelize instance
const sequelize = new Sequelize(
    process.env.MYSQL_NAME,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Una ble to connect to the database:", error);
  }
}

testConnection();

export default sequelize;

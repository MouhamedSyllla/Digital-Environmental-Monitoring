import { faker } from "@faker-js/faker";
import { Region, Village, Source, Sensor, SensorReading } from "../models/index.js";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  const transaction = await queryInterface.sequelize.transaction();

  try {
    // 1. Regions
    const regions = await Region.bulkCreate(
      Array.from({ length: 5 }).map(() => ({
        uuid: faker.string.uuid(),
        name: faker.location.city(),
      })),
      { transaction, returning: true }
    );

    // 2. Villages with region_id
    const villages = await Village.bulkCreate(
      Array.from({ length: 10 }).map(() => ({
        uuid: faker.string.uuid(),
        name: faker.location.street(),
        region_id: faker.helpers.arrayElement(regions).id,
      })),
      { transaction, returning: true }
    );

    // 3. Sources with village_id
    const sources = await Source.bulkCreate(
      Array.from({ length: 15 }).map(() => ({
        uuid: faker.string.uuid(),
        name: faker.company.name(),
        village_id: faker.helpers.arrayElement(villages).id,
      })),
      { transaction, returning: true }
    );

    // 4. Sensors with source_id
    const sensors = await Sensor.bulkCreate(
      Array.from({ length: 25 }).map(() => ({
        uuid: faker.string.uuid(),
        name: faker.word.adjective() + " Sensor",
        type: faker.helpers.arrayElement(["Temperature", "Pressure", "Flow"]),
        unit: faker.helpers.arrayElement(["C", "Pa", "L"]),
        status: faker.helpers.arrayElement(["Active", "Inactive"]),
        source_id: faker.helpers.arrayElement(sources).id,
      })),
      { transaction, returning: true }
    );

    // 5. SensorReadings with sensor_id
    await SensorReading.bulkCreate(
      Array.from({ length: 100 }).map(() => ({
        sensor_id: faker.helpers.arrayElement(sensors).id,
        value: parseFloat(faker.number.float({ min: 0, max: 100 }).toFixed(2)),
        entry_type: faker.helpers.arrayElement(["Sensor", "Manual", "Import"]),
      })),
      { transaction }
    );

    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await SensorReading.destroy({ where: {}, transaction });
    await Sensor.destroy({ where: {}, transaction });
    await Source.destroy({ where: {}, transaction });
    await Village.destroy({ where: {}, transaction });
    await Region.destroy({ where: {}, transaction });
  });
}

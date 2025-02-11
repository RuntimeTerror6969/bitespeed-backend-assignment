import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres", // Change as needed
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "admin",
  database: process.env.DB_NAME || "bitespeed",
  logging: false,
});

export default sequelize;

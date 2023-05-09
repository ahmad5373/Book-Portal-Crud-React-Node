require("dotenv").config();
const sequelize = require("sequelize");

const connection = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

//Testing connection
try {
  connection.authenticate();
  console.log("Database connection has been established successfully.");
} catch (error) {
  console.log("Enable to  connect with database:", error);
}
connection
  .sync({
    login: console.log,
    force: false, //The "force: true" option for sync will add "DROP TABLE IF EXISTS" to the create statements,
  })
  .then(() => {
    console.log(" sync to database connection establish successfully");
  })
  .catch((err) => {
    console.log("Enable to sync database connection", err);
  });
module.exports = connection;

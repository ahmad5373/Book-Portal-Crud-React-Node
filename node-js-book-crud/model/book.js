// import sequelize module (node module)
const sequelize = require("sequelize");
const database = require("../database/connection");

//Define Table Name and its Column
const Books = database.define(
  "Books",
  {
    id: {
      type: sequelize.BIGINT(255),
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: sequelize.STRING(),
      allowNull: false,
    },
    author: {
      type: sequelize.STRING(),
      allowNull: false,
    },
    no_of_pages: {
      type: sequelize.BIGINT(255),
      allowNull: false,
    },
    published_at: {
      type: sequelize.DATEONLY(),
      allowNull: false,
    },
  },
  {
    paranoid: true,
    timestamps: true,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: "book",
  }
);

module.exports = Books;

const express = require("express");
const Router = express.Router();

// import Book controller;
const book_controller = require("../controller/book_controller");

//Routes for Create a new Book
Router.post("/createBook", book_controller.createBook);
//Routes for Retrieve all Book
Router.get("/getBook", book_controller.getBook);
//Routes for Retrieve a single Book with id
Router.get("/get/:id", book_controller.get);
//Routes for Update a Book with id
Router.put("/update/:id", book_controller.update);
//Routes for Delete a Book with id
Router.delete("/delete/:id", book_controller.delete);

module.exports = Router;

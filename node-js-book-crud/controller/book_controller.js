// import model
const book = require("../model/book");

// Retrieve all Book from the database.
exports.getBook = async (req, res, next) => {
  try {
    const data = await book.findAll({});
    res.send({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
// Find a single Book with an Id
exports.get = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await book.findOne({
      where: { id: id, deletedAt: null },
    });
    if (data !== null) {
      res.status(200).json({
        Data: data,
      });
    } else {
      res.status(404).json({
        message: `cannot find Book with This  ${id}.`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
    });
  }
};
// Update a Book With Id
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await book.update(req.body, {
      where: { id: id, deletedAt: null },
    });
    if (data !== null) {
      res.status(200).json({
        message: `book has been updated with id ${id}.`,
      });
    } else {
      res.status(400).json({
        message: `book cannot be updated with id ${id}.`,
      });
    }
  } catch (error) {
    res.status(505).json({
      error: error.message,
    });
  }
};
//Delete Book with Id
exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await book.destroy({
      where: {
        id: id,
      },
    });
    if (data !== null) {
      res.status(200).json({
        message: `book has been deleted with id ${id}.`,
      });
    } else {
      res.status(400).json({
        message: `book cannot be deleted with id ${id}.`,
      });
    }
  } catch (error) {
    res.status(505).json({
      error: error.message,
    });
  }
};
// Create and Save a new Book
exports.createBook = async (req, res, next) => {
  // Validate request
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Check req.body
    const { title, author, no_of_pages, published_at } = req.body;
    // Create a book Data
    const save_data = {
      title,
      author,
      no_of_pages,
      published_at,
    };
    // Save Book Data in the database
    const book_save = await book.create(save_data);
    return res.status(200).json(book_save);
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      message: "Error Adding data to Book",
      error: e,
    });
  }
};

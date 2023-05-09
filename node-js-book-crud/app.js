const express = require("express");
const app = express();
const book = require("./routes/book");
const dbConfig = require("./database/connection");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// app.use(express.json()) use as a middleware
app.use(express.json());
app.use(cors());

// using express middleware in this main file to call api
app.use("/api", book);

//App is listening on the following Port:
app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`);
});

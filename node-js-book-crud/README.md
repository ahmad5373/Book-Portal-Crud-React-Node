## Project Book Portal Node JS

This is a Node.js backend for a web application that allows users to perform CRUD operations on a database of book. It is built using the Express.js framework and uses MySql as the database.

## Getting Started

To get started with this project, you'll need to have Node.js and MySql installed on your machine.

## Clone this repository to your local machine.

Navigate to the project directory in your terminal.
Run npm install to install the project dependencies.
Create a .env file in the project root directory and add the following environment variables:
DB_NAME : the Name of the database which will be connect for storing information
DB_HOST : The host for the database you are using
PORT: the port on which the server will listen
DB_PASSWORD: the password you need to add while connecting with database
JWT_SECRET: the secret key used for JSON Web Tokens
Run npm start to start the server.

## API Endpoints

The following endpoints are available for interacting with the collection of Books:
GET /getBook
Returns a list of all Books in the database.

POST /createBook
Creates a new book in the database. Requires a JSON payload in the following format:
json
{
"title": "Stars in the sky",
"author": "Johnson Piter",
"no_of_pages":110,
"published_at": "2014-09-11"
}

GET /get/:id
Returns the details of a single book from the database, specified by its ID.

PUT /update/:id
Updates the details of a single book in the database, specified by its ID. Requires a JSON payload in the following format:
json
{
"title": "Stars in the sky",
"author": "Johnson Piter",
"no_of_pages":110,
"published_at": "2014-09-11"
}
DELETE /delete/:id
Deletes a single book from the database, specified by its ID.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT

# Book-Portal-Crud-React-Node

# Book Portal
This is a book portal application built using React and Node.js that allows users to perform CRUD (Create, Read, Update, Delete) operations on book data. This application is intended for users who want to keep track of books they have read or want to read, and provides a simple and intuitive interface to manage book data.

## Getting Started
Prerequisites
Node.js (version 14 or higher)
npm (version 7 or higher) 

# Installation
Clone the repository
git clone https://github.com/ahmad5373/Book-Portal-Crud-React-Node

## Install server dependencies
cd book-portal/node-js
npm install

## Install client dependencies
cd book-portal/react-js
npm install

## Start the server
cd book-portal/node-js
npm start

## Start the client
cd book-portal/react-js
npm start
Open the application in a web browser by navigating to http://localhost:3000

## Features
**Users can view a list of all books in the portal
Users can add a new book to the portal
Users can update an existing book in the portal
Users can delete a book from the portal**

## Technologies Used
React
Node.js
Express
MySql
Axios
Tailwind CSS

## API Reference
Get all books
GET /getBook
Returns a list of all books in the portal.

Add a book
POST /createBook
Creates a new book in the database. Requires a JSON payload in the following format:
json
{
"title": "Stars in the sky",
"author": "Johnson Piter",
"no_of_pages":110,
"published_at": "2014-09-11"
}

PUT /update/:id
Requires a JSON payload in the following format:
json
{
"title": "Stars in the sky",
"author": "Johnson Piter",
"no_of_pages":110,
"published_at": "2014-09-11"
}
Updates an existing book in the portal with the specified ID.

DELETE /delete/:id
Deletes a single book from the database, specified by its ID.

## Acknowledgments
The Tailwind CSS documentation was very helpful in styling the application.

import http from "./http-common";

//Api call for Create book
const Createbook = async (title, author, no_of_pages, published_at) => {
  return http
    .post("/createBook", {
      title,
      author,
      no_of_pages,
      published_at,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("Err", error);
    });
};

//Get Api call to show book with Id
const getbookbyid = async (id) => {
  return http
    .get(`/get/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log("Err", error);
    });
};

//Get Api call to show all Books Data  from database
const getallbooks = async () => {
  return http
    .get("/getBook")
    .then(function (response) {
      if (response.data) {
      }
      // console.log("Response2", response);
      return response.data;
    })
    .catch(function (error) {
      console.log("Err", error);
    });
};

//Update Api call to update Book
const update = (id, data) => {
  return http.put(`/update/${id}`, data);
};

//Remove Book with Id
const remove = (id) => {
  return http.delete(`/delete/${id}`);
};

const bookserevice = {
  Createbook,
  getbookbyid,
  getallbooks,
  update,
  remove,
};

export default bookserevice;

import React, { useState } from "react";
import bookserevice from "../services/book.service";
import { useNavigate } from "react-router-dom";

function BookForm() {
  // initialize Book value
  const initialvalue = {
    title: "",
    author: "",
    no_of_pages: 0,
    published_at: "",
  };

  const [formData, setFormData] = useState(initialvalue);

  const navigate = useNavigate();

  //Onchange handler for input field value
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    //form data send it to a backend API
    bookserevice
      .Createbook(
        formData.title,
        formData.author,
        formData.no_of_pages,
        formData.published_at
      )
      .then((response) => {
        setFormData(response.data);
        navigate(`/books`);
      })
      .catch((error) => {
        console.log("Error", error);
        error.toString();
      });
  };
  return (
    <div className="h-screen">
      <div className="h-full w-full	bg-cover bg-center bg-Bg-image">
        <div className="flex flex-col items-center px-6 py-4 mx-auto lg:py-0">
          <div className="lg:mt-10 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight  text-gray-900 md:text-2xl dark:text-white">
                Create Book
              </h1>
              <form className="" onSubmit={handleSubmit}>
                <div>
                  <div>
                    <label
                      className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="first_name"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="last_name"
                    >
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      placeholder="Author"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="email"
                    >
                      Number of pages
                    </label>
                    <input
                      type="text"
                      id="no_of_pages"
                      placeholder="No of pages"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      name="no_of_pages"
                      value={formData.no_of_pages}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="text"
                    >
                      Published At
                    </label>
                    <input
                      type="date"
                      id="published_at"
                      name="published_at"
                      value={formData.published_at}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-8  md:ml-16 w-60 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookForm;

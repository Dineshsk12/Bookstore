import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner"; // Ensure correct import with capital S

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("table"); // Default view mode is table
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "table" ? "card" : "table"));
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={toggleViewMode}
        >
          {viewMode === "table" ? "Switch to Card View" : "Switch to Table View"}
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : viewMode === "table" ? (
        <table className="w-full border-separate border-spacing-2">
          <tbody>
            <tr>
              <td className="text-gray-500">Id</td>
              <td>{book._id}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Title</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Author</td>
              <td>{book.author}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Publish Year</td>
              <td>{book.publishYear}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Create Time</td>
              <td>{new Date(book.createdAt).toLocaleString()}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Last Updated Time</td>
              <td>{new Date(book.updatedAt).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Updated Time</span>
            <span>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;

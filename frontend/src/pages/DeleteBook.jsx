import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error deleting book:", error);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 bg-white shadow-lg">
          <h1 className="text-3xl my-4">Delete Book</h1>
          <p className="text-lg mb-4">Are you sure you want to delete this book?</p>
          {loading ? (
            <Spinner />
          ) : (
            <button
              className="p-2 bg-red-600 text-white rounded-md"
              onClick={handleDeleteBook}
            >
              Confirm Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;

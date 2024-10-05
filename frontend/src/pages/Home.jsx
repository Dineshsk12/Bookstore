import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner"; 
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/BooksTable";
import BooksCard from "../components/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewFormat, setViewFormat] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const toggleViewFormat = () => {
    setViewFormat(viewFormat === "table" ? "card" : "table");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <div>
          <button
            onClick={() => setViewFormat("table")}
            className={`px-4 py-2 rounded-md mr-4 ${viewFormat === "table" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Table View
          </button>
          <button
            onClick={() => setViewFormat("card")}
            className={`px-4 py-2 rounded-md ${viewFormat === "card" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Card View
          </button>
        </div>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        viewFormat === "table" ? <BooksTable books={books} /> : <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
 
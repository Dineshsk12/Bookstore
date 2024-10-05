import React from "react";
import { BsInfoCircle } from "react-icons/bs"; // Import BsInfoCircle
import { AiOutlineEdit } from "react-icons/ai"; // Assuming AiOutlineEdit is imported similarly
import { MdOutlineDelete } from "react-icons/md"; // Assuming MdOutlineDelete is imported similarly

const BooksCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books?.map((book) => (
        <div key={book._id} className="border border-gray-200 rounded-md p-4">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-500">{book.author}</p>
          <p className="text-gray-500">{book.publishYear}</p>
          <div className="flex justify-center mt-4">
            <BsInfoCircle
              className="text-2xl text-green-800 mr-4"
              onClick={() => alert("clciked")}
            />
            <AiOutlineEdit className="text-2xl text-yellow-600 mr-4" />
            <MdOutlineDelete className="text-2xl text-red-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;

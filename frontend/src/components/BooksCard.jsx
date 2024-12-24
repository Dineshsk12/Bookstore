import { BsInfoCircle } from "react-icons/bs"; 
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const BooksCard = ({ books }) => {
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/books/show/${id}`);
  };
  
  const handleEdit = (id) => {
    navigate(`/books/edit/${id}`);
  };
  
  const handleDelete = (id) => {
    navigate(`/books/delete/${id}`);
  };
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
              onClick={() => handleView(book._id)}
            />
            <AiOutlineEdit className="text-2xl text-yellow-600 mr-4"
            onCLick={()=> handleEdit(book._id)}
            />
            <MdOutlineDelete className="text-2xl text-red-600"
            onClick={()=> handleDelete(book._id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;

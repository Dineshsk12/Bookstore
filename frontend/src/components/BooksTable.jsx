import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BooksTable = ({ books }) => {
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
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
            <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.author}</td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <BsInfoCircle
                  className="text-2xl text-green-800 cursor-pointer"
                  onClick={() => handleView(book._id)}
                />
                <AiOutlineEdit
                  className="text-2xl text-yellow-600 cursor-pointer"
                  onClick={() => handleEdit(book._id)}
                />
                <MdOutlineDelete
                  className="text-2xl text-red-600 cursor-pointer"
                  onClick={() => handleDelete(book._id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;

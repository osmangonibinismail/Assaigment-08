import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
const {bookId} = book;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-slate-100 px-5 pb-5  mx-auto group border border-indigo-400 hover:scale-105  hover:border-indigo-200 border-opacity-30 hover:no-underline focus:no-underline">
                
                <img src={book.image} alt="bookimage" className=" pt-7 pb-7" />
                <div className="gap-10">
                    <button className="btn btn-sm bg-green-100 text-green-500">{book.tags}</button>
                    <button className="btn btn-sm bg-green-100 text-green-500 ml-5">{book.tag}</button>
                </div>
                <h1 className=" card-title pt-2">{book.bookName}</h1>
                <p className=" card-compact pt-2 pb-5 text-lg">Author: {book.author}</p>
                <div className="flex justify-between pb-6 pt-5 border-t-2">
                    <p>{book.category}</p>
                    <div className="flex gap-2"> 
                        <p>{book.rating}</p>
                        <button className="text-2xl"><CiStar></CiStar></button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
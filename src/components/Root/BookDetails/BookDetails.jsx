import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookApplication } from "../utility/localstorage";



const BookDetails = () => {
const books = useLoaderData();
const{bookId} = useParams();
const idInt = parseInt(bookId);
const book = books.find(book => book.bookId === idInt);
console.log(book);


const readToBook = () =>{
    saveBookApplication(bookId.Int);
    toast('you have applied succesfully');
}
    return (
        <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-01 pt-20">
            <div className="card bg-slate-100 px-5 pb-5">
                <img src={book.image} alt="image" className=" pt-7 pb-7" />
            </div>
            <div className="card bg-slate-100 px-5 pb-5">
                <h1 className=" card-title pt-2">{book.bookName}</h1>
                <p className=" card-compact pt-2 text-xl">Author: {book.author}</p>
                <p className="pt-2">{book.category}</p>
                    <p className="pt-2 pb-2">review: {book.review}</p>
                <div className="gap-10 pt-2">
                    Tag: <button className="btn btn-sm bg-green-100 text-green-500">{book.tags}</button>
                    <button className="btn btn-sm bg-green-100 text-green-500 ml-5">{book.tag}</button>
                </div>
                <p className="gap-10 pt-2">Number of pages: {book.totalPages}</p>
                <p className="pt-2">Publisher: {book.publisher}</p>
                <p className="pt-2">Year of Publishing: {book.yearOfPublishing}</p>
                <p className="pt-2">Rating: {book.rating}</p>
                <div className="gap-10 pt-2">
                    <button onClick={readToBook} className="btn btn-outline">Read</button>
                    <button className="btn btn-outline btn-accent ml-5">Wish List</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default BookDetails;
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBookApplication, saveBookApplication } from "../utility/localstorage";
import { useEffect, useState } from "react";



const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    const [isRead, setIsRead] = useState(false);
    const [isWishList, setIsWishList] = useState(false);

    useEffect(() => {
        const bookDetails = getStoredBookApplication();
        const isBookRead = bookDetails.some(item => item.bookId === idInt && item.item === 'read');
        const isBookWish = bookDetails.some(item => item.bookId === idInt && item.item === 'wish');
        setIsRead(isBookRead);
        setIsWishList(isBookWish);
    }, [idInt])
    const handleRead = () => {
        if (isRead) {
            toast('already added')
        } else {
            saveBookApplication(idInt, 'read')
            setIsRead(true)
            setIsWishList(true)
            toast('mark as read')
        }
    }
    const handleWishList = () => {
        if (isWishList) {
            toast('already added')
        } 
        else if (isRead) {
            toast('already added as read cannot add wiseList')
        }
        else{
            saveBookApplication(idInt, 'wish')
            setIsWishList(true)
            setIsRead(false)
            toast('added to wiseList')
        }
    }
    return (
        <div>
            <div>
                <div className="p-6 py-12 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                <br className="sm:hidden" />50% Off
                            </h2>
                            <div>
                                <div className="space-x-2 text-center py-2 lg:py-0">
                                    <span>Plus free shipping! Use code:</span>
                                    <span className="font-bold text-lg">OSMAN314</span>
                                </div>
                                <div className="font-bold">
                                    valid date: 15-12-2024
                                </div>
                            </div>
                            <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 border-gray-400 dark:border-gray-600">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-01 pt-20 border-spacing-6">
                <div className="card bg-slate-100 px-5 pb-5">
                    <img src={book.image} alt="image" className=" pt-7 pb-7" />
                </div>
                <div className="card bg-slate-100 px-5 pb-5">
                    <h1 className=" card-title pt-5">{book.bookName}</h1>
                    <p className=" card-compact pt-3 text-lg pb-5">Author: {book.author}</p>
                    <p className="pt-2 border-y-2 pb-2">{book.category}</p>
                    <p className="pt-5 pb-2 ">review: {book.review}</p>
                    <div className="gap-10 pt-2 pb-5">
                        Tag: <button className="btn btn-sm bg-green-100 text-green-500">{book.tags}</button>
                        <button className="btn btn-sm bg-green-100 text-green-500 ml-5">{book.tag}</button>
                    </div>
                    <p className="gap-10 pt-5 border-t-2">Number of Pages: {book.totalPages}</p>
                    <p className="pt-2">Publisher: {book.publisher}</p>
                    <p className="pt-2">Publishing year: {book.yearOfPublishing}</p>
                    <p className="pt-2">Rating: {book.rating}</p>
                    <div className="gap-10 pt-10 ">
                        <button onClick={handleRead} className="btn btn-outline">Read</button>
                        <button onClick={handleWishList} className="btn btn-outline btn-accent ml-5">Wish List</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;
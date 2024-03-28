import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBookApplication } from "../utility/localstorage";


const Listed = () => {
    const books = useLoaderData();
    const [listedBooks, setListedBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {
            // const booksApplied = books.filter(book => storedBookIds.includes(book.id))
            // console.log(books, storedBookIds, booksApplied)
            const listedBooks = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId == bookId)
                if (book) {
                    listedBooks.push(book)
                }
            }

            setListedBooks(listedBooks);
            // console.log(books, storedBookIds, booksApplied)
        }
    }, [])
    return (
        <div>
            <h2 className="text-2xl">all book list: {listedBooks.length}</h2>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500 text-white">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 bg-gray-100 rounded-box w-52">
                        <li className="text-lg"><a>Rating</a></li>
                        <li className="text-lg"><a>Number of Pages</a></li>
                        <li className="text-lg"><a>Publishing year</a></li>
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default Listed;
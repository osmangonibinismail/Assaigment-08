import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BooksItem = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])


    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10 pt-20">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
        
    );
};

export default BooksItem;
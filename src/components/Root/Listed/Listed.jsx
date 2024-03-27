import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredBookApplication } from "../utility/localstorage";


const Listed = () => {
    const books = useLoaderData();
    useEffect( () =>{
        const storedBookIds = getStoredBookApplication();
        if(books.length > 0){
            const booksApplied = books.filter(book => storedBookIds.includes(book.id))
            console.log(books, storedBooksId, booksApplied)
        }
    }, [])
    return (
        <div>
            <h2>all book list</h2>
        </div>
    );
};

export default Listed;
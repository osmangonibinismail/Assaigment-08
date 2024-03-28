import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBookApplication } from "../utility/localstorage";

const Listed = () => {
    const books = useLoaderData();
    
    const [listedBooks, setListedBooks] = useState([])
    // const [displayBooks, setDisplayBooks] = useState([]);

    // const handleBooksFilter = filter =>{
    //     if(filter === 'rating'){
    //         setDisplayBooks(appliedBooks);
    //     }
        
    //     else if(filter === 'Number of Pages'){
    //         const numberOfPagesBooks = appliedBooks.filter(book => book.totalPages === 'Number of Pages');
    //         setDisplayBooks(numberOfPagesBooks);
    //     }
    //     else if(filter === 'Publishing year'){
    //         const publishingYearBooks = appliedBooks.filter(book => book.yearOfPublishing === 'Publishing year');
    //         setDisplayBooks(publishingYearBooks);
    //     }
    // }

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
            // setDisplayBooks(displayBooks);
            // console.log(books, storedBookIds, booksApplied)
        }
    }, [])
    return (
        <div>
            <div>
                <div>
                    <div className="p-6 py-12 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                        <div className="container mx-auto">
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                    <br className="sm:hidden" />50% Off
                                </h2>
                                <div className="space-x-2 text-center py-2 lg:py-0">
                                    <span>Plus free shipping! Use code:</span>
                                    <span className="font-bold text-lg">MAMBA</span>
                                </div>
                                <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 border-gray-400 dark:border-gray-600">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl">all book list: {listedBooks.length}</h2>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500 text-white">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 bg-gray-100 rounded-box w-52">
                        <li className="text-lg"><a>Rating</a></li>
                        <li className="text-lg"><a>Number of Pages</a></li>
                        <li className="text-lg"><a>Publishing year</a></li>
                        {/* <li onClick={() => handleBooksFilter('rating')} className="text-lg"><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter('Number of Pages')} className="text-lg"><a>Number of Pages</a></li>
                        <li onClick={() => handleBooksFilter('Publishing year')} className="text-lg"><a>Publishing year</a></li> */}
                    </ul>
                </details>
                {/* <ul>
                    {
                        displayBooks.map(book => <li key={book.bookId}><span>{book.bookName}{book.author}: {book.image}:{book.image}{book.totalPages}</span></li>)
                    }
                </ul> */}

            </div>
            <div className="card grid md:grid-cols-3 gap-10 pt-20">
                <div className="card bg-slate-100 px-5 pb-5">
                    {/* <img src={book.image} alt="image" className=" pt-7 pb-7" /> */}
                </div>
                <div className="card bg-slate-100 px-5 pb-5">i am</div>
            </div>
            
        </div>
    );
};

export default Listed;
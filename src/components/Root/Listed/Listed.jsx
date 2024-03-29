import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBookApplication } from "../utility/localstorage";
import { IoIosContacts } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";

const Listed = () => {
    const books = useLoaderData();

    const [listedBooks, setListedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [wishListedBooks, setWishListedBooks] = useState([]);
    const [wishDisplayBooks, setWishDisplayBooks] = useState([]);

    const [sortBy, setSortBy] = useState([]);
    const [sortDes, setSortDes] = useState(['des']);

    const handleButton = item => {
        setSortBy(item)
        // if(item === 'all'){
        //     setDisplayBooks(listedBooks);
        //     setWishDisplayBooks(wishListedBooks);
        // }
        if(item === 'rat') {
            handleRating(listedBooks, setDisplayBooks);
            handleRating(wishListedBooks, setWishDisplayBooks);
        } else if(item === 'page'){
            handlePages(listedBooks, setDisplayBooks);
            handlePages(wishListedBooks, setWishDisplayBooks);
        } else if(item === 'year'){
            handleYear(listedBooks, setDisplayBooks);
            handleYear(wishListedBooks, setWishDisplayBooks);
        }
    }
    const handleRating = (books, setItem) => {
        const sortBooks = [...books].sort((x,y) => {
            if (sortDes === 'des') {
                return y.rating - x.rating;
            } else{
                return x.rating - y.rating;
            }
        })
        setItem(sortBooks)
    }
    const handlePages = (books, setItem) => {
        const sortBooks = [...books].sort((x,y) => {
            if (sortDes === 'des') {
                return y.totalPages - x.totalPages;
            } else{
                return x.totalPages - y.totalPages;
            }
        })
        setItem(sortBooks)
    }
    const handleYear = (books, setItem) => {
        const sortBooks = [...books].sort((x,y) => {
            if (sortDes === 'des') {
                return y.yearOfPublishing - x.yearOfPublishing;
            } else{
                return x.yearOfPublishing - y.yearOfPublishing;
            }
        })
        setItem(sortBooks)
    }

    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {
            const listedBooks = [];
            const listedWishList = [];


            for (const bookStore of storedBookIds) {
                const book = books.find(book => book.bookId === bookStore.bookId)
                if (book) {
                    if (bookStore.item === 'read') {
                        listedBooks.push(book)
                    } else if (bookStore.item === 'wish') {
                        listedWishList.push(book)
                    }
                }
            }

            setListedBooks(listedBooks);
            setDisplayBooks(listedBooks);
            setWishListedBooks(listedWishList);
            setWishDisplayBooks(listedWishList);

        }
    }, [])
    return (
        <div>
            <div className="pt-10">
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
            <h2 className="text-2xl">all book list: {listedBooks.length}</h2>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500 text-white">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-100 rounded-box w-52">
                        <li className="text-lg"><a onClick={() => handleButton('rat')}>Rating</a></li>
                        <li className="text-lg"><a onClick={() => handleButton('page')}>Number of Pages</a></li>
                        <li className="text-lg"><a onClick={() => handleButton('year')}>Publishing year</a></li>

                    </ul>
                </details>

            </div>
            <div className="w-full">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Book" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {
                            displayBooks.map(book => (
                                <div className="pt-10" key={book}>
                                    <div className="hero bg-base-200 border border-collapse grid md:grid-cols-1/3 gap-10 pt-2 pb-3 border-spacing-6 border-indigo-400  border-opacity-30 rounded-2xl">
                                        <div className="hero-content flex-col lg:flex-row gap-20">
                                            <div className="card bg-slate-100 px-5 pb-5 max-w-sm mx-auto group border border-indigo-400  border-opacity-30 hover:no-underline focus:no-underline">
                                                <img src={book.image} alt="image" className=" pt-7 pb-7" />
                                            </div>
                                            <div className=" md:grid-cols-2/3">
                                                <h1 className="text-3xl font-bold">{book.bookName}</h1>
                                                <h3 className="text-2xl font-bold">{book.author}</h3>
                                                <p className="text-xl font-bold"></p>
                                                <div className="flex justify-between pb-6 pt-5">
                                                    <p className="font-bold">Tag:</p> <button className="btn btn-sm bg-green-100 text-green-500">{book.tags}</button>
                                                    <button className="btn btn-sm bg-green-100 text-green-500 ml-2">{book.tag}</button>
                                                    <p className="ml-5"><button><SiGooglemaps /></button><a className="font-bold">Year of Publishing: </a>{book.yearOfPublishing}
                                                        </p>
                                                </div>
                                                <div className="flex justify-between pb-6 pt-5">
                                                    <h3 className="gap-2"><a className="font-bold "><button><IoIosContacts /></button>Publisher: </a> {book.publisher}</h3>
                                                    <h3 className="gap-2"><a className="font-bold gap-2"><button><RiPagesLine /></button>Page: </a>{book.totalPages}</h3>
                                                </div>
                                                <div className="flex justify-between pb-6 pt-5 border-t-2">
                                                    <button className="btn btn-sm bg-orange-200 text-orange-500 ml-2 rounded-3xl">category: {book.category}</button>
                                                    <button className="btn btn-sm bg-blue-200 text-blue-500 ml-2 rounded-3xl">rating:{book.rating}</button>
                                                    <button className="btn btn-sm bg-green-500 text-white ml-2 rounded-3xl">view details</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish List" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {
                            wishDisplayBooks.map(book => (
                                <div className="pt-10" key={book}>
                                    <div className="hero bg-base-200 border border-collapse grid md:grid-cols-1/3 gap-10 pt-2 pb-3 border-spacing-6 border-indigo-400  border-opacity-30 rounded-2xl">
                                        <div className="hero-content flex-col lg:flex-row gap-20">
                                            <div className="card bg-slate-100 px-5 pb-5 max-w-sm mx-auto group border border-indigo-400  border-opacity-30 hover:no-underline focus:no-underline">
                                                <img src={book.image} alt="image" className=" pt-7 pb-7" />
                                            </div>
                                            <div className=" md:grid-cols-2/3">
                                                <h1 className="text-3xl font-bold">{book.bookName}</h1>
                                                <h3 className="text-2xl font-bold">{book.author}</h3>
                                                <p className="text-xl font-bold"></p>
                                                <div className="flex justify-between pb-6 pt-5">
                                                    <p className="font-bold">Tag:</p> <button className="btn btn-sm bg-green-100 text-green-500">{book.tags}</button>
                                                    <button className="btn btn-sm bg-green-100 text-green-500 ml-2">{book.tag}</button>
                                                    <p className="ml-5"><a className="font-bold">Year of Publishing:</a>{book.yearOfPublishing}
                                                    </p>
                                                </div>
                                                <div className="flex justify-between pb-6 pt-5">
                                                    <h3 className="gap-2"><a className="font-bold ">Publisher:</a> {book.publisher}</h3>
                                                    <h3 className="gap-2"><a className="font-bold">Page:</a>{book.totalPages}</h3>
                                                </div>
                                                <div className="flex justify-between pb-6 pt-5 border-t-2">
                                                    <button className="btn btn-sm bg-orange-200 text-orange-500 ml-2 rounded-3xl">category: {book.category}</button>
                                                    <button className="btn btn-sm bg-blue-200 text-blue-500 ml-2 rounded-3xl">rating:{book.rating}</button>
                                                    <button className="btn btn-sm bg-green-500 text-white ml-2 rounded-3xl">view details</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Listed;
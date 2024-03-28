import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Hoom from './components/Root/Hoom/Hoom';
import Listed from './components/Root/Listed/Listed';
import ErrorPage from './components/Root/ErrorPage/ErrorPage';
import BookDetails from './components/Root/BookDetails/BookDetails';
import About from './components/Root/About/About';
import BestSeller from './components/Root/BestSeller/BestSeller';
import LineChart from './components/Root/LineChart/LineChart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Hoom></Hoom>,
      },
      {
        path: "/books",
        element: <Listed></Listed>,
        loader: () => fetch("/book.json")
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/book.json")
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/bestSeller",
        element: <BestSeller></BestSeller>
      },
      {
        path: "/pages",
        element: <LineChart></LineChart>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

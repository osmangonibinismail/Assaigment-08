import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           <div className="border border-indigo-200 rounded-3xl bg-sky-400">
           <h2 className="text-center">Oops!!</h2> 
           <h2 className="text-3xl text-center">404 Page</h2>
           
           <Link to="/" className="text-center">Go back to home</Link>
           </div>
        </div>
    );
};

export default ErrorPage;
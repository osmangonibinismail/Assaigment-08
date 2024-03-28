import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
           <div className="border border-indigo-200 rounded-3xl bg-sky-400 max-w-30">
           <h2 className="text-center">Oops!!</h2> 
           <h2 className="text-3xl text-center">404 Page</h2>
           
           <Link to="/"><button className="text-center btn btn-outline btn-primary">Go back to home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;
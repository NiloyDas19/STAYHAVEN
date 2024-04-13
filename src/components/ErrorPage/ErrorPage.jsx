import { Link } from "react-router-dom";
import DocumentTitle from './../../documentTitle/DocumentTitle';


const ErrorPage = () => {
    DocumentTitle('Error Page');
    return (
        <div className="flex flex-col items-center space-y-10 mt-10">
            <h2 className="text-3xl text-red-500 font-bold">404 not found</h2>
            <Link to="/">
                <button className="btn btn-outline btn-secondary px-15">Back To Home Page</button>

            </Link>
        </div>
    );
};

export default ErrorPage;
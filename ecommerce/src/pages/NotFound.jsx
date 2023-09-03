import { useRouteError, Link } from "react-router-dom";

const NotFound = () => { 

    const error= useRouteError();
    console.log(error);

    return (
        <div>
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>{error.statusText || error.message}</p>
            <Link to="/"> Volver al Home</Link>
        </div>
    );

};
export default NotFound;
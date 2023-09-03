import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/NavBar";

const LayoutPublic = () => { 

    const navigation= useNavigation()

    return (
        <>
        <Navbar />
        <main className="container">
        {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}    
            <Outlet />
        </main>
        <footer className="container text-center">Footer</footer>
        </>

    );

};

export default LayoutPublic;


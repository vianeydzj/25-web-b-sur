import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../Layout/LayoutPublic";

import Home, { loaderHome } from "../pages/Home";
import About from "../pages/About"
import Blog from "../pages/Blog"
import NotFound from "../pages/NotFound";



export const router = createBrowserRouter ([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [

            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />, 
                        loader: loaderHome,
                        
                    },
                    {
                        path: "/About",
                        element: <About />,
                        
                    },
                    { 
                        path: "/Blog", 
                        element: <Blog />,
                    },

                ]

            },
        ]

    },

])
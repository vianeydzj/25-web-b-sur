import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../Layout/LayoutPublic";

import Home from "../pages/Home";
import About from "../pages/About"
import Blog, { loaderBlog } from "../pages/Blog"
import Post, { loaderPost } from "../pages/post";
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
                        
                    },
                    {
                        path: "/About",
                        element: <About />,
                        
                    },
                    { 
                        path: "/Blog", 
                        element: <Blog />,
                        loader: loaderBlog,
                    },
                    { 
                        path: "/Blog/:id", 
                        element: <Post />,
                        loader: loaderPost,
                    }

                ]

            },
        ]

    },

])
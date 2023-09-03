import { Link, useLoaderData } from "react-router-dom";

const Blog = () => { 

    const {post} = useLoaderData()

    return (
        <ul>
            {post.length > 0 ? (
                post.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            {blog.id} - {blog.title}
                            </Link>
                    </li>
                ))
            ) : (
                <li>No blogs found</li>
            )}
        </ul>
    ); 
}; 

    export default Blog; 
//se exporta una función y tiene que devolver una promesa 
    export const loaderBlog = async () => {
        const res = await fetch ('https://jsonplaceholder.org/posts')
        
        if(!res.ok) 
    throw {
        status: res.status,
        statusText: "No encontrado",
    };
    
        const post = await res.json()

        return {post};
    }

import { useLoaderData } from "react-router-dom";

const Post = () => { 

    const {Post} = useLoaderData()

    return (
        <>
        <h1>{Post.id} - {Post.title}
        </h1>
        <p>
            {Post.body}
        </p>
        </>

    );

}
export default Post;

export const loaderPost = async ({params}) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if(!res.ok) 
    throw {
        status: res.status,
        statusText: "No encontrado",
    };
    const Post = await res.json();
    return {Post};


}
import { useLoaderData } from "react-router-dom";

const Post = () => { 

    const {Post} = useLoaderData()

    return (
        <>
        <h1>{Post.title}
        </h1>
        </>

    );

}
export default Post;

export const loaderPost = async ({params}) => {
    const res = await fetch (`https://api.escuelajs.co/api/v1/products${params.title}`
    );

    if(!res.ok) 
    throw {
        status: res.status,
        statusText: "No encontrado",
    };
    const Post = await res.json();
    return {Post};


}
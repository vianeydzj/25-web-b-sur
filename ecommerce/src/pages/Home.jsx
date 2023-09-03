import { useLoaderData } from "react-router-dom";

const Home = () => { 

    const {post} = useLoaderData()

    return (
        <>
        <ul>
            {post.length > 0 ? (
                post.map((Home) => (
                    <li key={Home.title}>
                        {Home.title} 
                        {Home.price} 
                        {Home.description}

                    </li>
                ))
            ) : (
                <li>No Home found</li>
            )}
        </ul>
        </>
        
    );
};

    export default Home; 
//se exporta una función y tiene que devolver una promesa 
export const loaderHome = async () => {
    const res = await fetch ('https://api.escuelajs.co/api/v1/products')
    
    if(!res.ok) 
throw {
    status: res.status,
    statusText: "No encontrado",
};

    const post = await res.json()

    return {post};
}

import { useLoaderData } from "react-router-dom";

const Home = () => { 

    const {post} = useLoaderData()

    return (
        <>
        <ul class="col-md-4">
            {post.length > 0 ? (
                post.map((Home) => (
                    
                    <li key={Home.title}>
                        <a class="col-md-4">
            <img src={Home.image} alt={Home.id} class="img-thumbnail"/>
            <li>
                {Home.title}
            </li>
        </a>
        <li>
        {Home.price}
        </li>
        <li>
        {Home.description}
        </li>
                        
                       
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

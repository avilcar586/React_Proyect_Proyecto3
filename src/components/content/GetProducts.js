import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Products from "./Products";
import { useParams } from 'react-router-dom';



const GetProducts = () => {

    const { category } = useParams();
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        //fetch(`https://fakestoreapi.com/products/category/electronics?limit=1`)
        
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [category])

    return (
        <>
        <div className="GetProducts">
            <Products products={products} />
        </div>
        </>
    )
}

export default GetProducts;
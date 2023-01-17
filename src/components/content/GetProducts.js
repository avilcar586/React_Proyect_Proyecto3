import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Products from "./Products";

const GetProducts = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')

            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    return (
        <>
        <div className="GetProducts">
            <Products products={products} />
        </div>
        </>
    )
}

export default GetProducts;
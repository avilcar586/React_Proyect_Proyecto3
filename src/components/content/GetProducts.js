import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Products from "./Products";
import { useParams } from 'react-router-dom';
import {ThreeCircles} from 'react-loader-spinner';



const GetProducts = () => {

    const { category } = useParams();
    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products`)
        //fetch(`https://fakestoreapi.com/products/category/electronics?limit=1`)
        
            .then(res => res.json())
            .then(data => {
                setproducts(data)
                setLoading(false)
            })
            

    }, [category])

    return (
        <>

        {loading ? (
            <div className="GetLoading">
                <ThreeCircles className="Loading"
                height="100"
                width="100"
                color="#cf649a"
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#333"
                innerCircleColor="#e993ff"
                middleCircleColor="#333"
                />
            </div>
        ) : (
        <div className="GetProducts">
            <Products products={products} />
        </div>
        )}
        </>

    )
}

export default GetProducts;
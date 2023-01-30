import { useHistory } from 'react-router-dom';
import Products from './Products';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../header/Nav';
import { selectClasses } from '@mui/material';
import {ThreeCircles} from 'react-loader-spinner';


const ProductCategories = ({selectedCategory}) => {
    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products/category/'+selectedCategory+'?limit=10') 
        .then(res => res.json())
            .then(data => {
                setproducts(data)
                setLoading(false)
            })
        
    }, [selectedCategory])

    return (
        <>

        {loading ? (
            <div className="GetLoading">

            <ThreeCircles className="Loading"
            height="100"
            width="100"
            color="#cf649a"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#333"
            innerCircleColor="#cf649a"
            middleCircleColor="#333"
            />
            </div>
        ) : (

        <div className="GetProducts">            
            {
            console.log(products)

            }
            
            <Products products={products} />
        </div>
        )}
        </>
    )
}


export default ProductCategories;
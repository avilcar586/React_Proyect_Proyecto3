import { useHistory } from 'react-router-dom';
import Products from './Products';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../header/Nav';
import { selectClasses } from '@mui/material';


const ProductCategories = ({selectedCategory}) => {
    const [products, setproducts] = useState([]);
    


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/'+selectedCategory+'?limit=10') 
        .then(res => res.json())
            .then(data => setproducts(data))
    }, [selectedCategory])

    return (
        <>
        <h1>{selectedCategory}</h1>
        <div className="GetProducts">            
            {
            console.log(selectedCategory)
            }

            <Products products={products} />
        </div>
        </>
    )
}


export default ProductCategories;
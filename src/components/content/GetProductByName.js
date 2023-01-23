import { useHistory } from 'react-router-dom';
import Products from './Products';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../header/Nav';
import { selectClasses } from '@mui/material';


const GetProductByName = ({selectedName}) => {
    const [products, setproducts] = useState([]);
    


    useEffect(() => {
        fetch('https://fakestoreapi.com/products?name='+selectedName) 
        .then(res => res.json())
            .then(data => setproducts(data))
    }, [selectedName])

    return (
        <>
        <h1>{selectedName}</h1>
        <div className="GetProducts">            
            {
            console.log(selectedName)
            }

            <Products products={products} />
        </div>
        </>
    )
}


export default GetProductByName;
import { useHistory } from 'react-router-dom';
import Products from './Products';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../header/Nav';
import { selectClasses } from '@mui/material';


const GetProductByName = ({selectedValue}) => {
    const [products, setproducts] = useState([]);
    console.log(selectedValue);

    useEffect(() => {
        //fetch('https://fakestoreapi.com/products?name='+selectedName) 
        //fetch(`https://fakestoreapi.com/products?name=${selectedName}`) 
        fetch('https://fakestoreapi.com/products?sort='+selectedValue)
        .then(res => res.json())
            .then(data => setproducts(data))
    }, [selectedValue])

    return (
        <>
        <h1>{selectedValue}</h1>
        <div className="GetProducts">            
            {
            console.log(products)
            }

            <select onChange={(e) => selectedValue(e.target.value)}>
                <option value="asc">Ascendente</option>
                <option value="dsc">Descendente</option>
            </select>

            if (selectedValue === 'asc') {
                products.sort((a, b) => (a.price > b.price) ? 1 : -1)
            } else {
                products.sort((a, b) => (a.price < b.price) ? 1 : -1)
            }
            <Products products={products} />
        </div>
        </>
    )
}


export default GetProductByName;
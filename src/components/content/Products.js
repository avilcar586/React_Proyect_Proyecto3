import { useEffect, useState } from "react";
import GetProducts from "./GetProducts";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css';
import { Alert } from "@mui/material";


const Products = (props) => {

    //Obtener los productos desde el componente GetProducts

    const {products} = props;

    return (

        <>
        {products.map((product) => (
            
        <Card sx={{ maxWidth: 345 }} className="Card">
            <CardMedia
                image={product.image}
                className="Cardcontentmedia"
                component="img"
                height="140">
            </CardMedia>
            <h3 className="Product-category">
                {product.category}
            </h3>
            <CardContent className="Contenidotarjeta">
                <Typography gutterBottom variant="h5" component="div" className="Titlecardh5">
                {product.title == null ? "Sin título" : product.title.substring(0, 15) + "..."
                }
                </Typography>
                <Typography variant="body2" color="text.secondary" className="Product-description">
                {product.description==null ? "Sin descripción" :
                product.description.substring(0, 100) + "..."
                }
                </Typography>
                <Typography variant="body2" color="text.secondary" className="Product-price">
                {product.price} $
                </Typography>
            </CardContent>
            <CardActions class="CenterItem">
            <a href="#" class="ButonContent" onClick={openSingleProduct}>
                <span>Ver Más</span>                
                <div class="liquid"></div>
            </a>
            </CardActions>
        </Card>
        ))}
        </>
    )

    
}


function openSingleProduct() {
    
    alert("Hola");
}

export default Products;
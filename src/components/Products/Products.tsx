import React from 'react';
import { Grid } from '@material-ui/core';
import green from '../../images/green.jpg'
import HibiscusImage from '../../images/HibiscusImage.jpg'


interface Products {
    id: number,
    name: string,
    description: string,
    price: string,
    image: string
}
    

const ProductList: Products[] = [
    { id: 0, name: 'Shoes', description: 'Running shoes.', price: '$5', image: green },
    { id: 1, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: HibiscusImage },
]

const Products = () => {

    return (

        <main>
        <Grid container justify="center" spacing={4}>
            {ProductList.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>  
                   <div>{product.name}</div>
                   <div>{product.description}</div>
                   <div>{product.price}</div>
                   <div><img src={product.image} alt=""/></div>
                </Grid>
            ))}
        </Grid>
    </main>
        )
}


export default Products
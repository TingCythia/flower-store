import React from 'react';
import { Grid } from '@material-ui/core';
import green from '../../images/green.jpg'
import HibiscusImage from '../../images/HibiscusImage.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
export default function MediaCard() {
    return (
      <></>
    );
  }

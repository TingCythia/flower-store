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
      <>
      <Card sx={{ maxWidth: 345,
         display: "flex",
        }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2020/01/13/19/43/lizard-4763351_960_720.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2020/01/13/19/43/lizard-4763351_960_720.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
  </>
    );
  }

/* const Products = () => {

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
} */


/* export default Products */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CateType from './categoryList';



         
function ImgMediaCard () {
   
  return (

 CateType.map((catetype, index) => (
   <Card   sx={{ maxWidth: 345 }} data-index={index}>
     <CardMedia         
        component="img"
        alt="green iguana"
        height="140">
    {catetype.image}
    </CardMedia>
     <CardContent>
     <Typography gutterBottom variant="h5" component="div" >  
    {catetype.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    {catetype.description}
    </Typography>
     </CardContent>
   </Card>
 ))

  );
}

export default  ImgMediaCard;
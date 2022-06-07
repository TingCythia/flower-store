import * as React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CateType from './categoryList';
import { CSSProperties } from 'react';

const useStyles = makeStyles({
    gridContainer: {
    justifyContent:"center"

    }
  });

const cardStyle: CSSProperties = {
    marginLeft: "auto",
    marginRight:"auto"
}
/* for (var _i = 0; _i < CateType.length; _i++) {
    var num = CateType[_i];
    console.log(num);
} */
         
export default function ImgMediaCard () {
    const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
       <Grid justify="center" item xs={12} sm={6} md={4}>
       <Card style={cardStyle} sx={{ maxWidth: 445 }} >
        <CardMedia         
           component="img"
           alt="green iguana"
           height="440"
           image= {CateType[0].image}>
       </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" >  
       {CateType[0].title}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {CateType[0].description}
       </Typography>
        </CardContent>
       </Card>
       </Grid>

       <Grid item xs={12} sm={6} md={4}>
       <Card style={cardStyle} sx={{ maxWidth: 445 }} >
        <CardMedia         
           component="img"
           alt="green iguana"
           height="440"
           image= {CateType[1].image}>
       </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" >  
       {CateType[1].title}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {CateType[1].description}
       </Typography>
        </CardContent>
       </Card>
       </Grid>

       <Grid item xs={12} sm={6} md={4}>
       <Card style={cardStyle} sx={{ maxWidth: 445 }} >
        <CardMedia         
           component="img"
           alt="green iguana"
           height="440"
           image= {CateType[2].image}>
       </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" >  
       {CateType[2].title}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {CateType[2].description}
       </Typography>
        </CardContent>
       </Card>
       </Grid>
   </Grid>


  );
}


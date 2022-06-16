
import * as React from "react";
import {useState, useEffect, FC}from "react"
import { Link, useParams} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ProductsState, receivedProducts } from "../products/productSlice";
import { getProducts, Product } from "../../app/api";
import { Button } from '@mui/material';
import {CSSProperties } from 'react';
import {Products} from "../products/Products"

export const singleProduct  =() =>{
  
 
  const {id}= useParams<{id: string}>();
  let ID = Number(id)
  console.log(ID)

  const dispatch = useAppDispatch();
  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
  });
}, []);
const products = useAppSelector((state) => state.products.products)
const item = products[ID]
console.log(item) 

return (
 
 
  <main className="page">
  
 <section key={item.id} style={sectionproduct}>
   <div style={sectionproduct}>
   <img style={imgStyle} src={item.imageURL} alt={"/"}  />  
   </div>
 
  <div style={sectionproduct} > 
    <h5  style={sectionproduct}> {item.name}</h5>
    <p style={sectionproduct}>{item.description} </p>
    <div style={sectionproduct}>{item.price} kr</div>
  
    <Link style={sectionproduct} to="/products" ><Button style={sectionproduct} color="inherit">Back to Store</Button></Link>
    </div>
  </section>
  </main> 
  
    )
/*      }else {
        return null
     } */
  
    }

    const sectionproduct: CSSProperties = {
      display:'flex',
      flex:"wrap",
      flexDirection:"column",
      fontSize:"1.7rem",
      textDecoration:"none",
      marginBottom:"30px",
      cursor:"pointer",
      textDecorationLine:"none",
      justifyContent:"center",
      margin: "auto",
      paddingTop:"30px",
      width:"600px"
      }
      const imgStyle: CSSProperties = {
     
        width:"600px"
        }

 
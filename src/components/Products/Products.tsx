import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useSelector } from 'react-redux'
import {CSSProperties }from 'react';
import { ProductsState, receivedProducts } from "./productSlice";
import { getProducts, Product } from "../../app/api";
import styles from "./Products.module.css";
import { addToCart } from "../cart/cartSlice";
import {Link, useParams} from 'react-router-dom'
import { connect, ConnectedProps, MapStateToProps, MapStateToPropsParam } from "react-redux";
import { AppDispatch } from "../../app/store";


export function Products() {


const dispatch = useAppDispatch();
  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
  });
}, []);


const getData = (id:string) =>{
  let tempData = [id];
 
  localStorage.setItem('items', JSON.stringify(tempData));
}


  const products = useAppSelector((state) => state.products.products)
  return (
 
    <main className="page">
      <ul className={styles.products}>
            
        {Object.values(products).map((product) => (
          
          <li key={product.id}>
        
            <article className={styles.product}>
              <figure>
                <img style= {{width:300, height:400}} src={product.imageURL} alt={product.imageAlt} />

              </figure>
              <div>
                <h1>{product.name}</h1>
               
                <p style={{fontSize:"1.5re"}}>{product.price} kr</p>
                
                <button style={buttonItem} onClick={() => dispatch(addToCart(product.id))}>Add to Cart 🛒</button>
                <div>
                <Link style={buttonItem} to={`/singleProduct/${product.id}`} > 
                  <button style={buttonItem}  onClick={()=> getData(product.id)} >Readmore</button></Link> 
                </div>
              </div>
            </article>
          </li>
          
        ))}
           
      </ul>
      
    </main>
   
  );
}
const buttonItem: CSSProperties = {
  display:'flex',
  flex:"wrap",
  fontSize:"1.5rem",
  textDecoration:"none",
  marginBottom:"30px",
  cursor:"pointer",
  textDecorationLine:"none",
  }
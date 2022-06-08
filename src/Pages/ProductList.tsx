import React from 'react'
import { CSSProperties } from 'react'
import green from '../images/green.jpg'

const ProductList = () => {
  return (
      <>
      <main style={productCardStyle}>
      <div><img src={green} alt="" style={imageStyle}></img></div>
      <div style={textStyle}>
        <div> Product name</div>
        <div> Product price</div>
        <div> Product description</div>
      </div>
        <div>
            <button>Add to cart</button>
        </div>
      
    
      </main>
   
      </>
      
      
      )
    }

    const textStyle: CSSProperties = {
        marginTop: "50px"
    }

    const productCardStyle: CSSProperties = {
        display: "flex",
        width: "300px",
        height: "400px",
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "grey",
        border: "solid 1.5px",
        borderRadius: "5px",
        
    }

    const imageStyle: CSSProperties = {
        display: "flex",
        width: "100%",
        height: "120%",
        alignItems: "center",
        marginTop: "-30px"
    }

export default ProductList
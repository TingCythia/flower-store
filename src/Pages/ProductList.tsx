import {FC}from 'react'
import { CSSProperties } from 'react'
import { product } from '../types/CategoryType';
import {Link} from 'react-router-dom'
import SingleProduct from './singleProduct';


interface Props{
  item: product
}

const ProductList : FC<Props>= (props) => {
  const items = props
  return (
      <>
      <Link to={`/${items.item.id}`}  /* onClick={() => SingleProduct()}  */ >
      
      <main style={productCardStyle}>
      <div><img src={props.item.image} alt="" style={imageStyle}></img></div>
      <div style={textStyle}>
        <div >{items.item.title} </div>
        <div> {items.item.price}</div>
        <div> {items.item.description}</div>
      </div>
        <div>
            <button style={buttonStyle}>Add to cart</button>
        </div>
      </main>
      </Link>
      </>

      )
    }


    const textStyle: CSSProperties = {
        marginTop: "50px"
    }
    const buttonStyle: CSSProperties = {
      height: "2rem",
      width: "7rem",
      fontSize: "1rem",
      marginTop: "5px"
    }
    const productCardStyle: CSSProperties = {
        display: "flex",
        width: "300px",
        height: "500px",
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "grey",
        border: "solid 1.5px",
        borderRadius: "5px",
        marginBottom:"80px",
        marginLeft:"70px",
        marginRight:"70px"
    }

    const imageStyle: CSSProperties = {
        display: "flex",
        width: "300px",
        height: "320px",
        alignItems: "center",
        marginTop:"10px"
    }

export default ProductList
import React from 'react'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import ProductList  from './ProductList'
import {productsData} from '../components/categoryList'
import SingleProduct from './singleProduct';


const Store = () => {
  return (
    <>
         <div style={boxStyle}><h3>Store page</h3></div>
         <div style={boxStyle} >
         {productsData.map((item)=>
         <ProductList key={item.id} item={item} />
         )}
         </div>
         <div><SingleProduct /></div>
    </>
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  flexWrap:"wrap",
  justifyContent:"space-around",
  height: "100%",
  marginTop: "50px",
  marginButtom: "250px"
}

export default Store
import React from 'react'
import Products from '../components/Products/Products'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import ProductList  from './ProductList'
import {ProductLists} from '../components/categoryList'

const Store = () => {
  return (
    <>

      <div style={boxStyle}><h3>Store page</h3>
      </div>
      <Products />

      <div style={boxStyle} >
      {ProductLists.map((item)=>
      <ProductList key={item.id} item={item} />
      )}
      </div>
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
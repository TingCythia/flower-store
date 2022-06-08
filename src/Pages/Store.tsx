import React from 'react'
import Products from '../components/Products/Products'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import ProductList from './ProductList'

const Store = () => {
  return (
    <>

      <div style={boxStyle}><h3>Store page</h3>
      </div>
      <Products />
      <ProductList />
      <div style={boxStyle}>
      </div>
    </>
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column"
}

export default Store
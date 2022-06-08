import React from 'react'
import Products from '../components/Products/Products'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

/* for eller map för listan */

/* console.log(Products); */

const Store = () => {
  return (
    <>

      <div style={boxStyle}><h3>Store page</h3>
      </div>
      <Products />
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
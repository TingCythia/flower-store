import React from 'react'
import Products from '../components/Products/Products'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

/* for eller map för listan */

/* console.log(Products); */

const Store = () => {
  return (
    <>

    <Products/>
    <div style={boxStyle}><h3>Store page</h3></div>
    <div style={boxStyle}>
    <p>View products.</p>
    </div>
    </>
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

export default Store
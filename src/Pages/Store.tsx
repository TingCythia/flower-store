import React from 'react'
import Products from '../components/Products/Products'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

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
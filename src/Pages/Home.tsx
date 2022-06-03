import React from 'react'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

const Home = () => {
  return (
    <>

    <div style={boxStyle}><h3>Home page</h3></div>
    <div style={boxStyle}>
    <p>Hi! Welcome to our flower shop.</p>

    </div>
    </>
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

export default Home
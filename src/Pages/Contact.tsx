import React from 'react'
import { CSSProperties } from '@material-ui/core/styles/withStyles'


const Contact = () => {
  return (
<>
    <div style={boxStyle}><h3>Contact page</h3></div>
    <div style={boxStyle}>
    <p>Feel free to reach out to us if you have any questions.</p>

    </div>
</>
  
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

export default Contact
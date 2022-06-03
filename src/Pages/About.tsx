import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckboxLabels() {
  return (
    <FormGroup >
      <FormControlLabel style={boxStyle} control={<Checkbox defaultChecked />} label="Check to be awesome" />
      <>
    
    <div style={boxStyle}><h3>About page</h3></div>
    <div style={boxStyle}>
    <p>We are a group of students from Medieinstitutet in Gothenburg. We plan to build a flower webshop based on React, Typescript & Vite.</p>
    </div>
    </>
    </FormGroup>
  );
}


const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  backgroundImage: "url: https://cdn.pixabay.com/photo/2016/02/13/10/35/tulips-1197602_960_720.jpg"
}

/* export default About */

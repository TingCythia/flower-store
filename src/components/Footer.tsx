import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react';

const footerStyle: CSSProperties = {
  backgroundColor: "grey",
  borderTop: "10px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%"
}

export default function Footer() {
  return (
    <footer>

          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <div style={{ ...footerStyle }}>
            Made by students of Medieinstitutet &reg; {new Date().getFullYear()}
            </div>
          </Box>
        
 
    </footer>
  
  );
}

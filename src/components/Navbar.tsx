import { CSSProperties, FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { CartLink } from "../components/cart/CartLink";


interface Props {}

const headerDiv: CSSProperties = {
display:'flex',
justifyContent:'center',
flex:"wrap"
}

const headerText: CSSProperties = {
  display:'flex',
  flex:"wrap",
  fontSize:"3rem",
  minWidth:"300px",
  textDecoration:"none",
  color: "#ffffff",
  }

const headerItem: CSSProperties = {
    display: "flex",
    fontSize: '1.5rem',
    margin: 0,
    padding: 0,
    marginLeft:"20px",
    marginRight:"20px",
    cursor: 'pointer',
    textDecoration: "none",
    color: "#ffffff",
    flexDirection: "row",
    justifyContent:"spance-around"
};

const Navbar: FC<Props> = (props) => {
  return (

    <>
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" sx={{bgcolor: 'text.primary'}} >
      <Toolbar style={headerDiv}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >   </IconButton>

        <div className="links" >
            {/* Header */}
            <div className="header" >
            <Link to="/"style={headerText} >
            <h3 style={headerText}>The Flower Store</h3>
            </Link>
            </div>
           {/*  Meny  */}
           
           <header className="links-style" style={headerItem}>
           
            <Link to="/Nav" style={headerItem}><Button style={headerItem} color="inherit">Home</Button></Link>
     
            <Link to="/products" style={headerItem}><Button style={headerItem} color="inherit">
              Products</Button>
            </Link>
    
            <div ><CartLink /></div>
            </header>
            
            </div>     

         {/*  <MenuIcon /> */}
     
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography> */}
        
      </Toolbar>
    </AppBar>
  </Box>
    </>
  )
}

export default Navbar
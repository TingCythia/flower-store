import { CSSProperties, FC } from 'react';
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface Props {}

const headerDiv: CSSProperties = {
    display: "inline-flex",
    alignItems: "flex-end",
    flexWrap: "wrap"
}

const headerItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: "none",
    color: "#ffffff",
    alignContent: "center",
    display: "inline-flex",
    flexDirection: "row",
};

const Navbar: FC<Props> = (props) => {
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >

<div className="links">
            {/* Header */}
            <div className="header">
            <Link to="/" style={headerItem}>
            <h3>The Flower Store</h3>
            </Link>
            </div>
           {/*  Meny  */}
            <div className="links-style" style={headerDiv}>
        <Link to="/" style={headerItem}><Button color="inherit">Home</Button></Link>
        <Link to="/About" style={headerItem}><Button color="inherit">About</Button></Link>
        <Link to="/Store" style={headerItem}><Button color="inherit">Store</Button></Link>
        <Link to="/Cart" style={headerItem}><Button color="inherit">Cart</Button></Link>
        <Link to="/Contact" style={headerItem}><Button color="inherit">Contact</Button></Link>
            </div>
        
        </div>
         {/*  <MenuIcon /> */}
        </IconButton>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography> */}
        
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
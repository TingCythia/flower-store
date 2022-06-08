import { CSSProperties, FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

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
  minWidth:"300px"
  }

const headerItem: CSSProperties = {
    display: "flex",
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    textDecoration: "none",
    color: "#ffffff",
    flexDirection: "row",
    justifyContent:"center"
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
            <Link to="/" style={headerItem}>
            <h3 style={headerText}>The Flower Store</h3>
            </Link>
            </div>
           {/*  Meny  */}
            <div className="links-style" style={headerItem}>
        <Link to="/" style={headerItem}><Button color="inherit">Home</Button></Link>
        <Link to="/About" style={headerItem}><Button color="inherit">About</Button></Link>
        <Link to="/Store" style={headerItem}><Button color="inherit">Store</Button></Link>
        <Link to="/Cart" style={headerItem}><Button color="inherit">Cart</Button></Link>
        <Link to="/Contact" style={headerItem}><Button color="inherit">Contact</Button></Link>
            </div>
        
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
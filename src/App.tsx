import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Products } from "./components/products/Products";
import { CartLink } from "./components/cart/CartLink";
import { Cart } from "./components/cart/Cart";
import { singleProduct } from "./components/singleProduct/single";
import styles from "./App.module.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
  <div className={styles.app}><Navbar /></div>

  
      
      <Routes>
        <Route  path="/">
        <Nav />
        </Route> 
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/Nav">
          <Nav />
        </Route>
{/*      <Route path='/singleProduct/:id' element = {<singleProduct />} >
       
        </Route> */}
        
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/app-routes">
      {/*   <AppRoutes /> */}
        </Route>

      </Routes>
      <div><Footer/> </div>
    </Router>
  
  );
}

export default App;

/* function Home() {
  return (
    <main className="page">
      <h1>Welcome to the Store</h1>
      <figure>
        <img src="/backgroundImg.jpg" alt="A large old storefront" width="800" />

      </figure>
    </main>
  );
} */

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Store from './pages/Store'
import Footer from './components/Footer'
import Toolbar from '@mui/material/Toolbar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="About" element={<About />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Store" element={<Store />} />
      </Routes>
      {/* <div className="App">
        Hello World
      </div> */}
      <Toolbar style={{ backgroundColor: "grey", justifyContent: "Center", position: "static", height: "50px", color: "white"}}>
      <Footer />
      </Toolbar>
    </Router>


    
  );
}

export default App

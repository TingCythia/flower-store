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
import SingleProduct from './pages/singleProduct';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="About" element={<About />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Store" element={<Store />} />
        <Route path=':id' element={<SingleProduct  />} />
      </Routes>
      {/* <div className="App">
        Hello World
      </div> */}

      <Footer />
    
    </Router>
      </>


    
  );
}

export default App



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Store from './pages/Store'
import { Switch } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  
)

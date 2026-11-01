import React from 'react'
import Nav from "./Nav"
import "./global.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Pagenotfound from './Pagenotfound'
import Viewproducts from './Viewproducts'
import Addproducts from './Addproducts'
import Home from "./Home"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Updateproduct from './Updateproduct'
const App = () => {
  return (
    <div>
       <ToastContainer/>
        <Router>
            <Nav/>
            <Routes>
                <Route path="/Viewproducts" element={<Viewproducts/>}/>
                <Route path="/Addproducts" element={<Addproducts/>}/>
                <Route path="/Updateproduct/:id" element={<Updateproduct/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Pagenotfound/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App


import React from "react"
import NavBarMenu from "./component/NavBarMenu"
import {BrowserRouter, Routes,Route} from "react-router-dom" 
import About from "./pages/About"
import Home from "./pages/Home"
// import "react-bootstrap"




function App() {
  

  return (
    <>
    
      <BrowserRouter>
      <NavBarMenu/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="about" element={<About/>}/> 
        </Routes>             
      </BrowserRouter>
      
    </>
  )
}

export default App

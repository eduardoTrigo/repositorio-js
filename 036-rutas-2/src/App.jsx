import React from "react"
import NavBarMenu from "./component/NavBarMenu"
import {BrowserRouter, Routes,Route} from "react-router-dom" 
import About from "./pages/About"
import Home from "./pages/Home"
import Punto1 from "./pages/Punto1"
import Punto2 from "./pages/Punto2"
import Punto3 from "./pages/Punto3"
// import "react-bootstrap"




function App() {
  

  return (
    <>
    
      <BrowserRouter>
      <NavBarMenu/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="about" element={<About/>}/>
          <Route path="punto1" element={<Punto1 />} /> 
          <Route path="punto2" element={<Punto2 />} /> 
          <Route path="punto3" element={<Punto3 />} /> 
        </Routes>             
      </BrowserRouter>
      
    </>
  )
}

export default App

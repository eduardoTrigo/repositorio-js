import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './screem/Home'
import Nav1 from './screem/Nav1'
import Cards1 from './screem/Cards1'
import Admin from './screem/Admin'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/inicio" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
      {/* <Nav1/>
      <Home/>
      <Cards1/> */}
    </>
  );
}

export default App

import React from "react";
import Homepage from "../uicomponents/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
// import Hi from "../uicomponents/Header1";
import Header1 from "../uicomponents/header/Header1";
function Routing(){
  return(<div>
    {/* <Homepage/> */}
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route  path='/nav' element={<Header1/>}/>
    </Routes>
  </div>)
}
export default Routing;
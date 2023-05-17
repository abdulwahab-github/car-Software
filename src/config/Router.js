import React from "react";
import "../App.css";
import { BrowserRouter, Link, Route, Routes ,useLocation,useParams } from "react-router-dom";
import Home from "../Screens/Home";
import BDetails from "../Screens/BDetails";
import LogIn from "../Screens/Login";
import Addcar from "../Admin_screen/Addcar";
import Signup from "../Screens/Signup";
import CarDetails from "../Screens/CarDetails";


function AppRouter() {
  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="bdetails" element={<BDetails/>} />
           <Route path="login" element={<LogIn/>} />
           <Route path="signup" element={<Signup/>} />
          <Route path="addcar" element={<Addcar/>} />
           <Route path="cardetails" element={<CarDetails/>} />
           {/* <Route path="/institute-dash/:id/*" element={<InstiDash />} />  */}
0          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;

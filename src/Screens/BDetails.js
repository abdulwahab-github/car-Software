import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { postfbdata } from "../config/firebasemethods";
import { getDatabase, set, ref, onValue, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "../config/firebaseconfig";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function BDetails() {
  const location = useLocation("");
  const navigate = useNavigate("");
  const [loader, setLoader] = useState(true);
  const [data, setdata] = useState(true);
  
  const [fbdata, setfbdata] = useState([])
const senddata = (e)=>{
  navigate("/signup")
  postfbdata(location.state,'Car-Bookings').then((res)=>{
    console.log(res);
    navigate("/signup")
}).catch((err)=>{
    alert(err);
  })
}
  
  return (
    <div>
      <div className="bg-dark  ">
        <h3 className="ms-5 text-danger p-2">
          <IconButton onClick={() => navigate("/")} className="bg-light ms-5">
            <ArrowBackIcon />
          </IconButton>
          <span className="ms-5"> Booking Details Here</span>
        </h3>
      </div>

      
        <div className="ms-5 txt-algn">
         
          <br />
          <h3 className="mt-2 text-danger ">
            Your Booked Car Name:{" "}
            <div className="text-success h4">{location.state.carname}</div>
          </h3>

          <h3 className="py-1 text-danger">
            Model Of Car :
            <div className="text-success h4"> {location.state.carmodal}</div>
          </h3>
          <h3 className="py-1 text-danger">
            Features Of Car :{" "}
            <div className="text-success h4">{location.state.airCondition} {location.state.gps}{location.state.bluetooth}{location.state.USBPort}  {location.state.airCondition}</div>
          </h3>
          <h3 className="py-1 text-danger">
            Availability Of Car In That Day   :{" "}
            <div className="text-success  h4">
              {location.state.availabilitycarday}  <h3 className="text-danger h3 "><b>
                <br/> Availability Of Car In That Timing :</b></h3> {location.state.availabilitycartime}
            </div>
          </h3>
          <h3 className=" text-danger">
            {" "}
            Description :{" "}
            <div className="text-success h4">{location.state.Description}</div>
          </h3>
         
          <Button className="bg-success text-light mt-2" onClick={(e)=>senddata(e)}>
            Book Now
          </Button>
        </div>
       
      
    </div>
  );
}

export default BDetails;

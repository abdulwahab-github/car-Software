import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import { getDatabase, set, ref, onValue, push } from "firebase/database";
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import { getAuth } from "firebase/auth";
import app from "../config/firebaseconfig";
import Loader from "../components/Loader";
import DetailsTwoToneIcon from '@mui/icons-material/DetailsTwoTone';
import DirectionsCarTwoToneIcon from '@mui/icons-material/DirectionsCarTwoTone';
import ModelTrainingTwoToneIcon from '@mui/icons-material/ModelTrainingTwoTone';
import UsbTwoToneIcon from '@mui/icons-material/UsbTwoTone';
import AccessTimeFilledTwoToneIcon from '@mui/icons-material/AccessTimeFilledTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import { CancelPresentation, DateRange, LocationOnTwoTone } from "@mui/icons-material";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import MyVerticallyCenteredModal from "./Modals";
import Modal from 'react-bootstrap/Modal';
import {signoutUser} from "../config/firebasemethods"
import {  signOut } from "firebase/auth";



function CarDetails(props) {
  const [loader, setLoader] = useState(true);
  const [shows, setshow] = useState(false);
  const [fbdata, setfbdata] = useState([]);
  const [fbdata1, setfbdata1] = useState([]);
  
  const auth = getAuth(app);
  const db = getDatabase(app);
  const getData = () => {
    let refrence = ref(db, "Car-Bookings" );
    onValue(refrence, (dt) => {
      if (dt.exists()) {
        setLoader(false);
         setLoader(false )
        setfbdata(Object.values(dt.val()));
      // console.log(fbdata)
      }else {
        setLoader(false);
     
        alert("Data Not Found :(");}});

        
      
      };
      
        
  useEffect(() => {
    getData();
  }, []);
  
  
  const navigate = useNavigate("");
  const show =()=>{
    setshow(true)
    let refrence1 = ref(db, "Booking-user-Transporator");
      onValue(refrence1, (dt) => {
        if (dt.exists()) {
           setLoader(false )
           setfbdata1(Object.values(dt.val()));
           console.log(fbdata1)


        }else {
          setLoader(false);
          alert("Data Not Found :(");}});
  }
  // const handleClose = () => {
  //   setshow(false);
  // };
  const hide = ()=>{
    setshow(false);

  }
  const Logout = ()=>{
    signOut(auth).then(() => {
     
      navigate("/login")
    }).catch((error) => {
      alert("An error happened.")
    });
  }
  
  return (
<div className="main">
  {fbdata1.map((x,i)=>
<Modal

show={shows}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={hide}
    >
      <Modal.Header closeButton onClick={hide}>
        <Modal.Title id="contained-modal-title-vcenter">
      Welcome {x.UserName} To Profile
               </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <h5>
        <b className="text-danger">Your Login Email:</b> <span className="text-success h5 ">{x.email} .</span> 
        </h5>
        <h5 className="text-danger"><b>Your Booking Cars :</b></h5>
        {fbdata.map((x,i)=>
        <h6>- {x.carname}</h6>
        )}
        
      </Modal.Body>
      
      <Modal.Footer>
        
        <Button onClick={Logout}>Logout</Button>
      </Modal.Footer>
      
    </Modal>)}
    
      <div className="bg-dark p-2  ">
        <h3 className="ms-5 text-danger ">
         
          <span className="ms-5 "> <DetailsTwoToneIcon/> Booking Details Here</span><span className="dflex"><IconButton onClick={show}className="bg-light"><AccountCircleTwoToneIcon/></IconButton></span> 
   
        {/* <span className="d-flex"><IconButton><AccountCircleTwoToneIcon/></IconButton></span> */}
        </h3>
      </div>

      { loader ? <Box sx={{
        marginTop:"15vh",
        textAlign:"center"
       
     }}>
      <Loader/>

    </Box>  : 
    fbdata.map((x,i)=>      
        <div className="ms-5 txt-algn mb-2">
         
          <br />
          <h3 key={i} className="mt-2 text-danger ">
            Your Booked Car Name:{" "}
            <div className="text-success h4"><DirectionsCarTwoToneIcon/> {x.carname}</div>
          
          </h3>

          <h3 key={i} className="py-1 text-danger">
            Model Of Car :
            <div className="text-success h4"><ModelTrainingTwoToneIcon/> {x.carmodal}</div>
          </h3><h3 key={i} className="py-1 text-danger">
           Detail Of Car :
            <div className="text-success h4"><DetailsTwoToneIcon/> {x.detailsofcar}</div>
          </h3>
          <h3 key={i} className="py-1 text-danger">
            Features Of Car :{" "}
            <div className="text-success h4">{x.USBPort}      </div>
            <div className="text-success h4"> <b> {x.bluetooth}</b>  </div>
            <div className="text-success h4">  {x.airCondition}  </div>
            <div className="text-success h4">  {x.gps}  </div>
          </h3>
          <h3 className="py-1 text-danger">
            Availability Of Car In That Day   :{" "}
            <div className="text-success  h4">
             <TodayTwoToneIcon/> {x.availabilitycarday}  <h3 className="text-danger h3 "><b>
                <br/> Availability Of Car In That Timing :</b></h3><AccessTimeFilledTwoToneIcon/> {x.availabilitycartime}
            </div>
          </h3>
          <h3 key={i} className=" text-danger">
            {" "}
            Description :{" "}
            <div className="text-success h4"><DescriptionTwoToneIcon/> {x.Description}</div>
          </h3><h3 key={i} className=" text-danger">
            {" "}
            Starting Location :{" "}
            <div className="text-success h4"><LocationOnTwoTone/> {x.startinglocation}</div>
          </h3>
          <h3 key={i} className=" text-danger">
            {" "}
            To Ending Location :{" "}
            <div className="text-success h4"><LocationOnTwoTone/> {x.endinglocation}</div>
          </h3>
          <h3 key={i} className=" text-danger">
            {" "}
            Cost :{" "}
            <div className="text-success h4 ">$ {x.cost}</div>
          </h3><h3 key={i} className=" text-danger">
            {" "}
            Rent Booking Starting Timing :{" "}
            <div className="text-success h4 "><DateRange/> {x.rentstrttime}</div>
          </h3><h3 key={i} className=" text-danger">
            {" "}
            Rent Booking Ending Timing :{" "}
            <div className="text-success h4 "><DateRange/> {x.rentendtime}</div>
          </h3>
          <br/>
          <h3 key={i} className="  backred  text-warning ">
            {" "}
            <CancelPresentation/> Cancellation Policy :{" "}
            <div className="text-info h5 "><DateRange/> {x.cancellationpolicy}</div>
          </h3>

         
       
          
        </div>  )} 
        
       
      
    </div>
  )
}

export default CarDetails
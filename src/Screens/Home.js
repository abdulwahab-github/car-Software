import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAuth } from "firebase/auth";
import app from "../config/firebaseconfig";
import { Get } from "../config/Apibasemethods";
import Loader from "../components/Loader";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getDatabase, set, ref, onValue, push } from "firebase/database";
import Card from 'react-bootstrap/Card';


import { postfbdata } from "../config/firebasemethods";
import CourseCard from "./CourseCard";
function Home() {
  const auth = getAuth(app);
  const db = getDatabase(app);

  const [inp, setinp] = useState("");
  const [cars, setcar] = useState({});
  const [loader, setLoader] = useState(true);
  const [fbdata, setfbdata] = useState([]);


  const navigate = useNavigate("");
  const getData = () => {
    let refrence = ref(db, "CarsDetails");
    onValue(refrence, (dt) => {
      if (dt.exists()) {
        setLoader(false);
        //  setShow(false )
        setfbdata(Object.values(dt.val()));
        
        // settbHead(Object.values(dt.val()));
      } else {
        setLoader(false);

        alert("Data Not Found :(");
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  
  const  gotobdetails = (e)=>{
      navigate("bdetails",{
          state:e,
          
      })
console.log(e)
  }
  return (
    <div>
      <Navbar valu={(e) => setinp(e)} />
      <div className="end">
      <Button className="bg-dark mt-3  end text-light" onClick={()=>navigate('/addcar')}>Add Car</Button></div>
      
      {loader ? <Box sx={{
        marginTop:"15vh",
        textAlign:"center"
       
     }}>
      <Loader/>

    </Box>  : 
      
      fbdata.filter((x, i) => {
        if (inp == "") {
            return x
        }else if (x.carname.toLowerCase().includes(inp.toLowerCase())) {
          return x
      }}).map((x)=><div className=" background p-2 ms-5 mt-5">
        
        <Card className="rounded shadow dark" style={{ width: '25rem', marginLeft:"10vh" , height:"12rem"}}>
      <Card.Body>
        <Card.Title className="text-danger">Car : {x.carname}</Card.Title>
        <Card.Subtitle className="mb-2 text-success">Detail : {x.detailsofcar}</Card.Subtitle>
        <Card.Text>
          Description : {x.Description}
        </Card.Text>
        
       <Button variant="contained" className="mt-4  " onClick={()=>gotobdetails(x)}>Book Now</Button>
      </Card.Body>
    </Card>
        </div>)}
       
 

      
    </div>
  );
}

export default Home;

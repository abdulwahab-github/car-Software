import { Button } from "@mui/material";
import React , { useEffect , useState } from 'react'
import { Link, useLocation , useNavigate } from 'react-router-dom'
import { postfbdata } from '../config/firebasemethods'
import { signUpUser } from '../config/firebasemethods';
import { getDatabase, set, ref, onValue, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "../config/firebaseconfig";

function Signup() {
    const[model,setmodel]=useState({});
    const navigate = useNavigate('');
    const location = useLocation("")

    const auth = getAuth(app);
    const db = getDatabase(app);

    const createUser=(e)=>{
       
        e.preventDefault(e) 
   signUpUser(model).then((res)=>{
  console.log(res)
  postfbdata(model, "Booking-user-Transporator")
  .then((res) => {
    navigate("/login");
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });
//   navigate("/")
}).catch((err)=>{
  alert(err)
})};

const send =()=>{
  navigate("/login")
}

  return (
    <>
      <h1 className="text-center fw-bolder mt-2">Sign Up</h1>
      <div className="container sign">
        <div className=" row ">
          <div className="col-lg-12 md-12 col-sm-12 mt-4">
            <div className="side mx-auto ">
              <form className=" ">
                <div class="mb-3">
                  <h4>User Name :</h4>
                  <input
                    type="text"
                    onChange={(e) =>
                      setmodel({ ...model, UserName: e.target.value })
                    }
                    placeholder="User Name "
                    class=" form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="mb-3">
                  <h4>Email address :</h4>
                  <input
                    type="text"
                    onChange={(e) =>
                      setmodel({ ...model, email: e.target.value })
                    }
                    class="form-control"
                    placeholder=" Email Address"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <h4>Password :</h4>
                  <input
                    type="password"
                    onChange={(e) =>
                      setmodel({ ...model, password: e.target.value })
                    }
                    maxLength={"11"}
                    placeholder="Password "
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <h4>Contact No :</h4>
                  <input
                    type="text"
                    maxLength={"11"}
                    onChange={(e) =>
                      setmodel({ ...model, contactno: e.target.value })
                    }
                    placeholder="Contact  "
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                
              
            <h4 className="mt-2">User Type :</h4>
            <select
             aria-label="Default select example"
             className="form-select w-100 p-2 rounded"
              onClick={e => setmodel({ ...model, Type: e.target.value })}
            >
              <option value="">Select Place</option>
              <option value="Transporter">Transporter</option>
              <option value="User">User</option>
             
            </select>
          
                <button
                  onClick={createUser}
                  type="submit"
                  class="btn btn1 px-5  btn-primary"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-align">
            <h5 className="mt-3 text-muted">If You have An Already Account Soo <Button className="txt"  onClick={send}> Log In</Button> Here</h5>
        </div>
      </div>
    </>
  );
}

export default Signup;

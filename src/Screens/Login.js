import React from "react";
import "../App.css";
import { useState } from "react";
import { loginUser } from "../config/firebasemethods";
import { useNavigate , useLocation } from "react-router-dom";

export default function LogIn() {
  const [login, setlogin] = useState({});
  const [fbdata, setfbdata] = useState([]);

  const navigate = useNavigate();
  const location = useLocation("")
console.log(location.state)
  let signIn = () => {
    loginUser(login)
      .then((e) => {
        console.log(e);
        navigate("/cardetails");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
      <div className="container   ">
        <div className=" row  ">
          <div className="login py-5 px-5  ">
            <h1 className="mb-5 mt  fw-bolder text-dark ">
              Log In <br /> <span className="ms-5">Here</span>
            </h1>
            <div className="ms-5 mar ">
              <div className="ms- ">
                <h4 className=" ms-5 text-dark">Email :</h4>
                <div className="ms-5 margin w-75">
                  <input
                    className="form-control"
                    placeholder=" Email Address"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) =>
                      setlogin({ ...login, email: e.target.value })
                    }
                    type=" Email,number "
                  />
                  <br />
                  <h4 className="my-3 text-dark">Password :</h4>
                  <input
                    className="form-control "
                    placeholder=" Password"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    maxLength={"11"}
                    onChange={(e) =>
                      setlogin({ ...login, password: e.target.value })
                    }
                    type="password"
                  />
                </div>

                <button
                  onClick={signIn}
                  className="btn ml-5 btn-primary mb-3 ms-5 mt-4 px-5  "
                >
                  Log in
                </button>
                <br />
              </div>
              <br />
              <br />
              <br />
              <br />
              <hr className="c-dark" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

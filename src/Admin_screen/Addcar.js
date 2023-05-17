import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import { postfbdata } from "../config/firebasemethods";
import { getDatabase, set, ref, onValue, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "../config/firebaseconfig";

function Addcar() {
  const [model, setModel] = useState([]);
  const navigate = useNavigate("");
  const auth = getAuth(app);
  const db = getDatabase(app);
  const save = () => {
    postfbdata(model, "CarsDetails")
    .then((res) => {
      navigate("/");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <div>
      <div className="text-dark mb-5 p-3 rounded shadow d-flex  ">
        
        <h3 className="text-dark  ms-5">Car Form :</h3>
      </div>

      <div className="ms-2 mt-2 mb-5 first  shadow  dark ">
        <div className="row">
          <div className="text-end">
            <Button
              className="px-5 22222233 "
              onClick={save}
              variant="contained"
            >
              {/* {model.id ? "Edit ":"Save"} */}
              Save
            </Button>
          </div>
          <div className="col-md-6  col-sm-12 mt-3">
            <TextField
              id="filled-basic"
              label="Car Name"
              variant="filled"
              className="w-75"
              onChange={(e) => setModel({ ...model, carname: e.target.value })}
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-3">
            <TextField
              id="filled-basic"
              label="Details Of Car"
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, detailsofcar: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <TextField
              id="filled-basic"
              label="Description"
              className="w-75"
              variant="filled"
              onChange={(e) =>
                setModel({ ...model, Description: e.target.value })
              }
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-5">
            <TextField
              id="filled-basic"
              label="Car Name"
              variant="filled"
              className="w-75"
              // onChange={(e) => setModel({ ...model, carname: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <TextField
              id="filled-basic"
              label="Car Modal"
              variant="filled"
              className="w-75"
              onChange={(e) => setModel({ ...model, carmodal: e.target.value })}
            />
          </div>
          <div className="col-md-6 col-sm-12 mt-3">
            <h4>Car Features</h4>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Air Condition"
              onChange={(e) =>
                setModel({ ...model, airCondition: e.target.value })
              }
            />
            <label for="vehicle1" className="ms-2 text-dark">
              {" "}
              Air Condition
            </label>
            <br />
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value="GPS"
              onChange={(e) => setModel({ ...model, gps: e.target.value })}
            />
            <label for="vehicle2" className="ms-2 text-dark">
              {" "}
              GPS
            </label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="Bluetooth"
              onChange={(e) =>
                setModel({ ...model, bluetooth: e.target.value })
              }
            />
            <label for="vehicle3" className="ms-2 text-dark">
              {" "}
              Bluetooth
            </label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="USB Port"
              onChange={(e) => setModel({ ...model, USBPort: e.target.value })}
            />
            <label for="vehicle3" className="ms-2 text-dark">
               USB Port
            </label>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Availability Of Car Day"
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, availabilitycarday: e.target.value })
              }/>
          </div>
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Availability Of Car Timing"
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, availabilitycartime: e.target.value })
              }/>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Starting Location"
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, startinglocation: e.target.value })
              }/>
          </div>
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Ending Location"
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, endinglocation: e.target.value })
              }/>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Rent Booking Starting Time "
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, rentstrttime: e.target.value })
              }/>
          </div>
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Rent Booking Ending Time"
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, rentendtime: e.target.value })
              }/>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Cancellation Policy"
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, cancellationpolicy: e.target.value })
              }/>
          </div>
          <div className="col-6 mt-5">
            <TextField
            id="filled-basic"
              label="Cost Of Car "
              variant="filled"
              className="w-75"
              onChange={(e) =>
                setModel({ ...model, costofcar: e.target.value })
              }/>
          </div>
        </div>
        
        <br />
      </div>
    </div>
  );
}

export default Addcar;

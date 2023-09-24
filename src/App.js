
import React,{ useState } from "react";

import './App.css';
import NetworkShapes from './Network';
import LogicCircuit from './Logicsample';
import Port from './Port';
import { height } from '@mui/system';



function App() {
  const [button1Active, setButton1Active] = useState("NetworkShapes");

  return (
    <div className="App">
      <div
          style={{ backgroundColor: "#002742", height: "40px", width: "100%" }}
        >
          {" "}
          <span
            style={{
              color: "white",
              fontSize: "24px",
              padding: "25px",
              fontWeight: 700,
            }}
          >
            Belcan
          </span>{" "}
          <div style={{paddingTop: '6px', paddingRight :'6px', float: 'right'}}>
          <button  onClick={() => setButton1Active("NetworkShapes")} >
            Network
          </button>
          <button onClick={() =>setButton1Active("LogicCircuit")}>
            Logic
          </button>
          <button onClick={() =>setButton1Active("Port")}>
            Port
          </button>
          </div>
        </div>
        {button1Active=="LogicCircuit" ? <LogicCircuit /> :button1Active=="NetworkShapes" ? <NetworkShapes />:<Port/>}
  {/* <NetworkShapes></NetworkShapes> */}
    </div>
  );
}

export default App;

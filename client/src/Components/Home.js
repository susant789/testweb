import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <div className="data">
        <select name="Dropdown" id="">
          <option value="val1">
            Dropdown
          </option>
          <option value="val2">
            Dropdown2
          </option>
        </select>
      </div>
    </div>
  );
}

export default Home;

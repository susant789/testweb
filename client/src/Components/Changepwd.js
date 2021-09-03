import React, { useState } from "react";
import "./changepwd.css";

function Changepwd() {
  const [chpassword, setChpassword] = useState("");

  return (
    <div className="wrapper2">
      <div className="content2">
        <h1
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            borderBottom: ".1rem solid #333",
            margin: "1rem 12rem",
            fontWeight: "600",
          }}
        >
          Reset Password
        </h1>
        <div className="info1">
          <h1>username : </h1>
          <h2>susant678</h2>
        </div>
        <div className="info1">
          <h1>password : </h1>
          <input
            required
            placeholder="Password"
            type="password"
            value={chpassword}
            onChange={(e) => setChpassword(e)}
          />
        </div>
        <div className="btn" style={{marginTop:"3.8rem"}} >
          <button className="btn1">save password</button>
          <button className="btn1">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Changepwd;

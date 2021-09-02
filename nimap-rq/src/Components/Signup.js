import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";


function Signup() {

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const register = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="logiWwrapper" style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "8rem",
          color: "#ccc",
          margin: "2rem auto 1rem auto",
        }}
      >
        LOGO
      </h1>
      <form className="loginContent">
        <h1
          style={{ fontSize: "2.5rem", textAlign: "center", fontWeight: "400" }}
        >
          SIGNUP
        </h1>
        <div className="loginInfo">
          <h3>Name : *</h3>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="loginInfo">
          <h3>Email : *</h3>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="loginInfo">
          <h3>Password : *</h3>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginBtn">
          <input type="submit" value="Register" onClick={register} />
        </div>
      </form>
    </div>
  );
}

export default Signup;

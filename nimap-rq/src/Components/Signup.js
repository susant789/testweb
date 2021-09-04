import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import { login } from "../Reducers/userSlice";
import {useDispatch} from "react-redux";
import cogoToast from "cogo-toast";

function Signup() {

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Err,setErr] = useState("")

  const dispatch = useDispatch();


  const register = (e) =>{
    e.preventDefault();
    if(!name || !email || !password){
      return cogoToast.error("enter every field"); 
    }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return cogoToast.error("invalid email");
    }else if(password.length < 6){
        return cogoToast.error("enter more than 6 chars");
    }else{
      try{
        localStorage.setItem("loginInfo", JSON.stringify({name, email, password}))
        cogoToast.error("signed up successfully");
        dispatch(login({
          name:name,
          email:email,
          password:password,
        }))
        history.push("/");
      }catch(err){
        setErr(err.message)
        console.log(Err)
      }
      setName("")
      setEmail("")
      setPassword("")
    }
  }

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
            onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        <div className="loginInfo">
          <h3>Email : *</h3>
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div className="loginInfo">
          <h3>Password : *</h3>
          <input
            type="password"
            placeholder="Password"
            minLength={8}
            required
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <div className="loginBtn">
          <input type="submit" onClick={register} />
        </div>
      </form>
    </div>
  );
}

export default Signup;

import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {

  const history = useHistory();
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  let login=(e)=>{
    e.preventDefault();
    
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
          LOGIN
        </h1>
        <div className="loginInfo">
          <h3>Email : *</h3>
          <input type="email" placeholder="Email" required 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="loginInfo">
          <h3>Password : *</h3>
          <input type="password" placeholder="Password" required 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="loginBtn">
          <input type="submit" value="Login" onClick={login} />
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

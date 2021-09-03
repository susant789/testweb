import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";
import M from 'materialize-css';

function Login() {

  const history = useHistory();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [Err,setErr] = useState("")

  

  const login = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return console.log("invalid email")
    }
    fetch('/login',{
        method:"post",
        headers:{
            "Content-Type" : "application/json" 
        },
        body:JSON.stringify({
            email : email,
            password : password,
        })
    }).then(res => res.json())
    .then(data => {
        if(data.error){
          console.log(data.error)
        }
        else{
          console.log("sucessfully logedin")
          history.push('/')
        }
    }).catch(error =>{
        console.log(error);
    })
}

  login();
    // const currentUser = JSON.parse(localStorage.getItem("loginInfo"));    

    // const login=()=>{
    //   if( !currentUser){
    //     return M.toast({html:"please signup before login",classes:"#c62828 red darken-3"})
    //   }
    //   try{
    //     if(currentUser.email === email && currentUser.password === password){
    //       localStorage.setItem("loginInfo",JSON.stringify({ ...currentUser(), isLoggedIn: true }))
    //       history.push('/')
    //     }
    //   }catch(err){
    //     setErr(err.message)
    //     M.toast({html:{Err},classes:"#c62828 red darken-3"})
    //   }
    // }

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
          onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="loginInfo">
          <h3>Password : *</h3>
          <input type="password" placeholder="Password" required 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}/>
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

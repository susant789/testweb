import React from 'react'
import "./userpage.css"
import {Link} from "react-router-dom"

function Userpage() {
    return (
        <div className="wrapper1">
            <div className="content1">
                <h1 style={{ fontSize: "2.5rem",fontWeight: "600",textAlign:"center",borderBottom:".1rem solid #333",margin:"1rem 18rem"}}>USER</h1>
                <div className="info">
                    <h1>username : </h1>
                    <h2>susant678</h2>
                </div>
                <div className="info">
                    <h1>password : </h1>
                    <h2>**********</h2>
                </div>
                <div className="btn" style={{marginTop:"3.8rem"}}>
                    <Link to="/changepsw">
                     <button className="btn1">change password</button>
                    </Link>
                    <button className="btn1">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Userpage

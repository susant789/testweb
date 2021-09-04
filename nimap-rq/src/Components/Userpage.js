import React from 'react'
import { useHistory } from "react-router-dom";
import "./userpage.css"
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {selectUser} from "../Reducers/userSlice"
import {logout} from "../Reducers/userSlice"

function Userpage() {

    const history = useHistory()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signout = ()=>{
        dispatch(logout())
        history.push("/login")
    }

    return (
        <div className="wrapper1">
            <div className="content1">
                <h1 style={{ fontSize: "2.5rem",fontWeight: "600",textAlign:"center",margin:"1rem 18rem"}}>USER</h1>
                <div className="info">
                    <h1>username : </h1>
                    <h2>{user && user.name}</h2>
                </div>
                <div className="info">
                    <h1>password : </h1>
                    <h2>{user && user.password}</h2>
                </div>
                <div className="btn" style={{marginTop:"3.8rem"}}>
                    <Link to="/changepsw">
                     <button className="btn1">change password</button>
                    </Link>
                    <button className="btn1" onClick={signout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Userpage

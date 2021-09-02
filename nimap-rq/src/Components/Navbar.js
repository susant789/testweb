import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

function Navbar() {
    return (
        <>
            <Header>
                <div>
                    <Link to="/"><h1 className="logo">LOGO</h1></Link>
                    <Menu>
                        <div>
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/task">Task</Link>
                            <Link className="link" to="/userpage">User</Link>
                        </div>
                    </Menu>
                </div>
            </Header>
        </>
    )
}

const Header = styled.div`
    height:5rem;
    background:grey;
    border-radius:1rem;
    margin:.2rem .3rem;
    div {
        height:100%;
        margin:0 5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;

        h1{
            color:#ddd;
            font-size:2.5rem;
            letter-spacing:.3rem;
        }
    }
    .logo{
        animation:Logoshine 3s infinite;
    }
`;
const Menu = styled.div`
    flex:1;
    width:20%;
    .link {
        font-size:1.5rem;
        color:#ccc;
        letter-spacing:.2rem;
        padding:1.5rem 1rem;
        transition: all .3s;
    }
    .link:hover{
        background-color:black;
        color:white;
        transition: color .3s;
    }
    .link:active{
        background-color:black;
        color:white;
    }
`;

export default Navbar

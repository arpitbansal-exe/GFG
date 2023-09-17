import { Link } from 'react-router-dom'
import Logo from '../Assets/logo1.png'
import React,{useEffect, useState} from 'react'
export default function Navbar() {
    const [user, setUser] = useState("Welcome Geek");
    const [state, setState] = useState("Login");

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            setState("Logout");
            setUser("Welcome "+JSON.parse(localStorage.getItem('user-info')).name);
        }
        else{
            setState("Login");
            setUser("Welcome Geek");
        }
      }, [])
    function LoginLogout(){
        if(state==="Login"){
            window.location.href="/login";
        }
        else{
            localStorage.clear();
            window.location.href="/";
        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand"  style={{marginLeft:5}} to="/">
                    <img src={Logo} width="50" height="50" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link "  >{user} </Link>
                        </li>
                        <li className="nav-item ml-auto">
                            <Link className="nav-link mr-10" onClick={LoginLogout}> {state} </Link>
                        </li>



                    </ul>
                </div>
            </nav>


        </>
    )
}

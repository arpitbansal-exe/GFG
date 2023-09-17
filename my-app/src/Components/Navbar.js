import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.jpeg'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link className="navbar-brand" to="/">GFG MIT</Link> */}
                <Link class="navbar-brand"  style={{marginLeft:5}} to="/">
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
                            <Link className="nav-link float-right" to="/login">Login</Link>
                        </li>

                    </ul>
                </div>
            </nav>


        </>
    )
}

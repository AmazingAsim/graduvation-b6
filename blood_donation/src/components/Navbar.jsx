import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>

            <nav
                className="navbar navbar-expand-sm navbar-dark  bg-danger p-2"
            >
                
                    <Link className="navbar-brand" to="#">DaretoCare.com</Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="" aria-current="page">Home
                                    <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="feedback">Feedback</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="donate">Donate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="eligibility">Eligibility</Link>
                            </li>
                      
                        </ul>
                 
                    </div>
            </nav>

        </div>
    )
}

import React from 'react'
import './Navbar.scss';
import img from '../../setup/logo.png';
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={img} alt="Logo"/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">About</a>
                </li>
                <li>
                    <a href="/" className="nav-link">Tours</a>
                </li>
            </ul>
        </nav>
    )
}

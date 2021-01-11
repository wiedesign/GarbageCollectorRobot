import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/robot-controls">Get Started</Link>
                </li>
            </ul>
        </div>
    )
}

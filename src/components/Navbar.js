import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Robot</Link>
                </li>
                <li>
                    <Link to="/">Timeline</Link>
                </li>
                <li>
                    <Link to="/">Controls</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

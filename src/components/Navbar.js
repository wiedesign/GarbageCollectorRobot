import React from 'react'
import { Link as Scroll } from 'react-scroll';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Scroll
                        activeClass="active"
                        to="about-island"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}>
                        About
                    </Scroll>
                </li>
                <li>
                    <Scroll
                        activeClass="active"
                        to="meet-robot"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Robot
                    </Scroll>
                </li>
                <li>
                    <Scroll
                        activeClass="active"
                        to="timeline"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Timeline
                    </Scroll>
                </li>
                <li>
                    <Scroll 
                        activeClass="active"
                        to="home-controls"
                        spy={true}
                        smooth={true}
                        offset={-190}
                        duration={500}> 
                        Controls
                    </Scroll>
                </li>
                <li>
                    <Scroll 
                        activeClass="active"
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}> 
                        Contact Us
                    </Scroll>
                </li>
            </ul>
        </div>
    )
}

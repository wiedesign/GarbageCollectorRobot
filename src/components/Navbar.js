import React from 'react'
import { Link as Scroll} from 'react-scroll';
import { Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Scroll
                        activeClass="active"
                        to="aboutIsland"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        About
                    </Scroll>
                </li>
                <li>
                    <Scroll
                        activeClass="active"
                        to="robot"
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
                        to="controlIsland"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}> 
                        Controls
                    </Scroll>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

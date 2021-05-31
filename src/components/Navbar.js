import React from 'react'
import { Link as Scroll } from 'react-scroll';

export default function Navbar() {
    return (
        <section className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list__item">
                    <Scroll
                        activeClass="active"
                        to="home__about"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}>
                        About
                    </Scroll>
                </li>
                <li className="navbar__list__item">
                    <Scroll
                        activeClass="active"
                        to="home__robot"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Robot
                    </Scroll>
                </li>
                <li className="navbar__list__item">
                    <Scroll
                        activeClass="active"
                        to="home__timeline"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Timeline
                    </Scroll>
                </li>
                <li className="navbar__list__item">
                    <Scroll 
                        activeClass="active"
                        to="home__controls"
                        spy={true}
                        smooth={true}
                        offset={-190}
                        duration={500}> 
                        Controls
                    </Scroll>
                </li>
                <li className="navbar__list__item">
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
        </section>
    )
}

import React from 'react';

import FirstPage from '../components/FirstPage';
import Timeline from '../components/Timeline';
import MeetOurRobot from '../components/MeetOurRobot';

export default function Home() {
    return (
        <div className="home">
            <FirstPage />
            <div className= "aboutIsland">
                <p  id="about-title">About WiE Design Team</p>
                <p  id="about-body">Women in Engineering Design Team (WiE Design) 
                is a small technical club that is a subset of the larger Women in Engineering club at 
                Simon Fraser University. WiE Design consists of self-identifying females and other
                under-represented groups in STEM. We have members from a wide range of programs such as Computer 
                engineering, Systems engineering, Electronics engineering, Bio-med engineering, Mechatronics engineering, 
                Communications and Business. Our goal is to give women a safe and uninterrupted platform to share, and 
                listen to ideas from other women, build their design knowledge and technical skills in fields such as
                engineering, marketing and business, and most importantly to gain confidence in their abilities.</p>
            </div>
            <MeetOurRobot />
            <div className="robot">
                <div className="nameIsland">
                    <p id="name-title">DARCY</p>
                    <p id="name-subtitle">Dthing Athing Rthing Cthing Ything</p>
                    <p id="name-body">Women in Engineering Design Team (WiE Design) is
                    a small technical club that is a subset of the larger Women in Engineering 
                    club at Simon Fraser University. WiE Design consists of self-identifying females and 
                    other under-represented groups in STEM. We have members from a wide range of programs
                    such as Computer engineering, </p>
                </div>
            </div>
            <Timeline />
            <div className= "controlIsland">
                <p className="home-controls">Take me to the controls</p>
            </div>
        </div>  
    )
}

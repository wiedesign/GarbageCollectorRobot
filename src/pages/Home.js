import React from 'react';

import FirstPage from '../components/FirstPage';
import Timeline from '../components/Timeline';
import MeetOurRobot from '../components/MeetOurRobot';
import AboutIsland from '../components/AboutIsland';
import NameIsland from '../components/NameIsland';

export default function Home() {
    return (
        <div className="home">
            <FirstPage />
            <AboutIsland />
            <MeetOurRobot />
            <img src="/images/islands/island3.png"/>
            <NameIsland />
            <Timeline />
            <div className="home-controls">
                <p>Click for Controls</p>
            </div>
        </div>  
    )
}

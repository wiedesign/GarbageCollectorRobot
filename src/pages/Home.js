import React from 'react';

import FirstPage from '../components/FirstPage';
import Timeline from '../components/Timeline';
import MeetOurRobot from '../components/MeetOurRobot';
import AboutIsland from '../components/AboutIsland';
import ControlIsland from '../components/ControlIsland';
import NameIsland from '../components/NameIsland';

export default function Home() {
    return (
        <div className="home">
            <FirstPage />
            <MeetOurRobot />
            <AboutIsland />
            <NameIsland />
            <ControlIsland />
            <Timeline />
        </div>  
    )
}

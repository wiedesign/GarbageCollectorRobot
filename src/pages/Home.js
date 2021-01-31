import React from 'react';

import FirstPage from '../components/FirstPage';
import AboutIsland from '../components/AboutIsland';
import MeetOurRobot from '../components/MeetOurRobot';
import Timeline from '../components/Timeline';
import HomeControls from '../components/HomeControls';

export default function Home() {
    return (
        <div className="home">
            <FirstPage />
            <AboutIsland />
            <MeetOurRobot />
            <Timeline />
            <HomeControls />
        </div>  
    )
}

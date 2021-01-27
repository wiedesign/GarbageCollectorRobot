import React from 'react';

import FirstPage from '../components/FirstPage';
import AboutIsland from '../components/AboutIsland';
import MeetOurRobot from '../components/MeetOurRobot';
import NameIsland from '../components/NameIsland';
import Timeline from '../components/Timeline';
import HomeControls from '../components/HomeControls';
import ModelView from '../components/ModelView';

export default function Home() {
    return (
        <div className="home">
            <FirstPage />
            <AboutIsland />
            <MeetOurRobot />
            
            <NameIsland />
            <Timeline />
            <HomeControls />
        </div>  
    )
}

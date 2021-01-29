import React from 'react';

import FirstPage from '../components/FirstPage';
import AboutIsland from '../components/AboutIsland';
import MeetOurRobot from '../components/MeetOurRobot';
import ModelView from '../components/ModelView';
import NameIsland from '../components/NameIsland';
import Timeline from '../components/Timeline';
import ProjectProgress from '../components/ProjectProgress';
import HomeControls from '../components/HomeControls';

export default function Home() {
    return (
        <div className="home">
            <FirstPage />
            <AboutIsland />
            <MeetOurRobot />
            <NameIsland />
            <Timeline />
            <ProjectProgress />
            <HomeControls />
        </div>  
    )
}

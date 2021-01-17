import React from 'react';

import FirstPage from '../components/FirstPage';
import Timeline from '../components/Timeline';

export default function Home() {
    return (
        <div className="home">
            <FirstPage />
            <h1>About the Women in Engineering Design Team</h1>
            <Timeline />

            <div className = "controlIsland">
                <p className="home-controls">Take me to the controls</p>
            </div>
        </div>  
    )
}

import React from 'react';

import Timeline from '../components/Timeline';

export default function Home() {
    return (
        <div className="home">
            <h1>About the Women in Engineering Design Team</h1>
            <Timeline />
            <div className = "controlIsland">
            <img src="/images/islands/island5.png" alt="" className="home-controls" />
            </div>
        </div>  
    )
}

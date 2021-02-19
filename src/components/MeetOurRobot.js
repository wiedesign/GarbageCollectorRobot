import React from 'react'

import NameIsland from '../components/NameIsland';

export default function MeetOurRobot() {
    return (
    <div className="meet-robot">
        <img className="meet-robot-turtle" src="/images/turtle2.png" alt="" />
        <div className="meet-robot-top">
            <div className="meet-robot-bubble bubble-1" />
            <div className="meet-robot-bubble bubble-2" />
            <div className="meet-robot-bubble bubble-3" />
        </div>
        <p>Meet<br/>Our<br/>Robot</p>
        <div className="meet-robot-bottom">
            <div className="meet-robot-bubble bubble-4" />
            <div className="meet-robot-bubble bubble-5" />
            <div className="meet-robot-bubble bubble-6" />
        </div>
        <div className="model-view">
            <model-viewer
                src="/3d-model/SN_RobotAssembly.glb"
                alt="A 3D model of a robot"
                auto-rotate=""
                camera-controls=""
                className="model-view-robot"
            />
        </div>
        <NameIsland />
    </div>
    )
}

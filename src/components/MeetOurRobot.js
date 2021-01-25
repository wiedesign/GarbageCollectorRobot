import React from 'react'

export default function MeetOurRobot() {
    return (
    <div className="meet-robot">
        <img className="meet-robot-turtle" src="/images/turtle2.png" alt="" />
        <div className="meet-robot-top">
            <div className="meet-robot-bubble1" />
            <div className="meet-robot-bubble2" />
            <div className="meet-robot-bubble3" />
        </div>
        <p>Meet<br/>Our<br/>Robot</p>
        <div className="meet-robot-bottom">
            <div className="meet-robot-bubble1" />
            <div className="meet-robot-bubble2" />
            <div className="meet-robot-bubble3" />
        </div>
        <div className="model-view">
            <model-viewer
                src="/3d-model/RobotExpressive.glb"
                alt="A 3D model of a robot"
                auto-rotate=""
                camera-controls=""
                className="model-view-robot"
                width="100%"
            />
        </div>
    </div>
    )
}
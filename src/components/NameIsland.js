import React from 'react';

export default function NameIsland() {
    return (
        <div className="name-island">
            <p className="name-island-title">DARCY</p>
            <p className="name-island-subtitle">Dthing Athing Rthing Cthing Ything</p>
            <p className="name-island-body">Name is a 2WD/4WD garbage collector robot controlled via BLE.
                Name can be remotely controlled via bluetooth and wifi communication using our web-app. The
                robot is equipped with a grapple claw loader to help pick up the waste and includes a trailer
                to store the waste in. Name also has a camera that streams live video of the surroundings to
                the user. In future, WiE Design Team plans to make the robot semi-autonomous/fully autonomous
                by implementing machine learning and object detection.
            </p>
            <div className="name-island-bubbles bubble-1" />
            <div className="name-island-bubbles bubble-2" />
            <div className="name-island-bubbles bubble-3" />
        </div>
        
        )
}
import React from 'react';

export default function NameIsland() {
    return (
        <div className="name-island">
            <p className="name-island-title">ROBERTA</p>
            <p className="name-island-subtitle">Remote Operated Bot for the Expedited Retrieval of Trash</p>
            <p className="name-island-body">
            ROBERTA is a mobile base IoT garbage-collector robot. 
            ROBERTA can be remotely controlled via BLE and wifi communication using our web-app.
            The robot is equipped with a grapple claw loader to help pick up any waste and includes
            a trailer to store the waste in. Robot also has a camera that streams live video of its 
            surroundings to the user. In future, WiE Design Team plans to make the robot semi-autonomous/fully 
            autonomous by implementing machine learning and object detection.
            </p>
            <div className="name-island-bubbles bubble-1" />
            <div className="name-island-bubbles bubble-2" />
            <div className="name-island-bubbles bubble-3" />
        </div>
    )
}

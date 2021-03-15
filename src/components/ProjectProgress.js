import React from 'react'

export default function ProjectProgress() {
    return (
        <div className="project-progress">
            <p className="project-progress-title" id="project-progress-title">Project Progress</p>
            <p className="project-progress-1"><b>Research:</b> Research scope of project, high level hardware 
                components, sensors, actuators, communication protocols, web interface.    
            </p>
            <p className="project-progress-2"><b>Design:</b> Designing methods for garbage collection and storage mechanism.    
            </p>
            <p className="project-progress-3"><b>Communication:</b> Implementing IoT based communication between web-app and ESP32-Wroom-32 microcontroller.  
            </p>
            <p className="project-progress-4"><b>Robot Mobility:</b> Research, implementing base motor controller, 
                designing and printing chassis, executing base movement controls on web-app.    
            </p>
            <p className="project-progress-5"><b>Body and Trailer:</b> Research, designing and assembling robot body and trailer with garbage-collection box.  
            </p>
            <p className="project-progress-6"><b>Robot Links and Loader:</b> Research, printing robotic links with a grapple claw loader 
                as the end effector, implementing arm and claw movements with steppers, adding UI controls.  
            </p>
            <p className="project-progress-7"><b>Robot Head:</b> Research, designing and printing robot head, include recycled PCBs as a 
                design aesthetic feature, research optimal video streaming protocol/communication method, 
                include camera and live video streaming to the web-app.
            </p>
        </div>
    )
}

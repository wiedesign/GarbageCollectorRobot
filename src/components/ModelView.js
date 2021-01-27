import React from 'react'

export default function ModelView() {
    return (
        <div className="model-view">
            <model-viewer className="model" src="/3d-model/SN_RobotAssembly.glb" 
            alt="A 3D model of a robot" auto-rotate="" camera-controls="" background-color="#455A64" />
        </div>
    )
}
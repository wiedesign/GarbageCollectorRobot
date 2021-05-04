import React from 'react'
import { Link } from "react-router-dom";
import ActionControls from '../components/ActionControls'
import MovementControls from '../components/MovementControls'

export default function Controls() {
    return (
        <section className="controls">
            <Link to="/"><img src="/images/logo.png" alt="" /></Link>
                <div className="controls__connectionIndicators">
                    <button className="controls__connectionIndicators__ble"/>
                    <button className="controls__connectionIndicators__wifi"/>
                </div>
                <button className="controls__clawOpenbtn">Claw Open</button>
                <div className="controls__bottomSection">
                    <div className="controls__bottomSection__actionControls">
                        <ActionControls />
                    </div>
                    <img className="controls__bottomSection__blue-robot-trash" src="/images/controller/blue-robot-trash.svg" alt="" />
                    <div className="controls__bottomSection__movementControls">
                        <MovementControls />
                    </div>
                </div>
        </section>
    )
}

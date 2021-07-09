import React from 'react'
import { Link } from "react-router-dom";
import ActionControls from '../components/ActionControls'
import MovementControls from '../components/MovementControls'

const Controls: React.FC = () =>{
    return (
        <section className="controls">
            <div className="controls__hero">
                <Link to="/"><img src="/images/logo.png" alt="" /></Link>
                <div className="controls__hero__video">
                    <p className="controls__hero__video--on">ON</p>
                </div>
                <div className="controls__hero__icons">
                    <button className="controls__hero__icons__ble"/>
                    <button className="controls__hero__icons__wifi"/>
                </div>   
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
};
 
export default Controls;
import React from 'react'


export default function MovementControls() {
    function clawState() {
        var claw = document.getElementById("clawBtn");
        if (claw.innerHTML == "Claw Open")
        {
            claw.innerHTML = "Claw Closed";
        }   
        else {
            claw.innerHTML = "Claw Open";
        }
    }
    return (
        <section className="movementControls">
            <button className="movementControls__clawBtn" id="clawBtn" onClick={clawState}>Claw Open</button>
            <div className="movementControls__container">
                <div className ="movementControls__container__btns">
                    <button className ="movementControls__container__btns__up" />
                    <div className ="movementControls__container__btns__LR">
                        <button className ="movementControls__container__btns__LR__left"/>
                        <button className ="movementControls__container__btns__LR__right"/>
                    </div>
                    <button className ="movementControls__container__btns__down"/>
                </div>
            </div> 
        </section>
    )
}

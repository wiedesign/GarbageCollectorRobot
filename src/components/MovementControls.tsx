import React from 'react'
const MovementControls: React.FC = () => {
    function claw_button() {
        let claw_button = document.getElementById('clawBtn') as HTMLElement;
        if(claw_button.innerHTML == "Claw Open" ) {
            claw_button.innerHTML = "Claw-Closed";
        }
        else {
            claw_button.innerHTML = "Claw Open ";
        }
    }
    return (
        <section className="movementControls">
        <button className="movementControls__clawBtn" id="clawBtn" onClick={claw_button}>Claw Open</button>
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
};

export default MovementControls;
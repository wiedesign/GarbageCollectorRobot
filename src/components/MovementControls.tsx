import React from 'react'
const MovementControls: React.FC = () => {
    return (
        <section className="movementControls">
        <button className="movementControls__clawBtn" id="clawBtn">Claw Open</button>
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
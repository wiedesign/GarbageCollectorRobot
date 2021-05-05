import React from 'react'


export default function MovementControls() {
    return (
        <section className="movementControls">
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

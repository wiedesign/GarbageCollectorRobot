import React, { Component } from 'react'
import $ from "jquery";
window.jQuery = $;
require("round-slider");

class Example extends Component {
    componentDidMount() {  
        ($("#slider") as any).roundSlider({
         circleShape: "pie",
         startAngle: 315,
         showTooltip: false,
         lineCap: "round",
         radius: 165,
         width: 30,
        }); 
    }

    handleForward() {
        console.log("F");
    }
    handleBackward() {
        console.log("B");
    }
    handleRight() {
        console.log("R");
    }
    handleLeft() {
        console.log("L");
    }
 
    render() {
        return(
            <section className="actionControls">
                <div className ="actionControls__container">
                <link href="https://cdn.jsdelivr.net/npm/round-slider@1.6.1/dist/roundslider.min.css" rel="stylesheet" />
                    <div id="slider"/>
                    <div className="actionControls__container__btns">
                        <button className="actionControls__container__btns__up" 
                            onClick={() => this.handleForward()}
                        />
                            <div className="actionControls__container__btns__LR"
                                onClick={() => this.handleLeft()}
                            >
                                <button className="actionControls__container__btns__LR__left" 
                                    onClick={() => this.handleRight()}
                                />
                                <button className="actionControls__container__btns__LR__right" />
                            </div>
                        <button className="actionControls__container__btns__down" 
                            onClick={() => this.handleBackward()}
                        />   
                    </div>
                </div>
            </section>  
        );
    }
}

export default Example;
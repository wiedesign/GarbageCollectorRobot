import React, { Component } from 'react'
// import $ from "jquery";
// window.jQuery = $;
// require ("round-slider");

class Example extends Component {
    // componentDidMount() {  
    //     $("#slider").roundSlider({
    //      circleShape: "pie",
    //      startAngle: 315,
    //      showTooltip: false,
    //      lineCap: "round",
    //      radius: 165,
    //      width: 30,
    //     });
    // }
 
    render() {
        return(
            <section className="actionControls">
                <div className ="actionControls__container">
                <link href="https://cdn.jsdelivr.net/npm/round-slider@1.6.1/dist/roundslider.min.css" rel="stylesheet" />
                    <div id="slider"/>
                    <div className="actionControls__container__btns">
                        <button className="actionControls__container__btns__up" />
                            <div className="actionControls__container__btns__LR">
                                <button className="actionControls__container__btns__LR__left" />
                                <button className="actionControls__container__btns__LR__right" />
                            </div>
                        <button className="actionControls__container__btns__down" />   
                    </div>
                </div>
            </section>  
        );
    }
}

export default Example;



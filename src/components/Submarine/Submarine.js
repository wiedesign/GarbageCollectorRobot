import React from 'react';
import './Submarine.css';

import whiteWindow from './whiteWindow.png';
import blueWindow from './blueWindow.png';
import fin from './fin.png';
import rect from './timeRect.png';
import subTop from './subTop.png';
import a1 from './Arrow5.png';
import a2 from './Arrow 6.png';
import a3 from './Arrow 7.png';
import a4 from './Arrow 8.png';
import a5 from './Arrow 9.png';
import sand from './Vector.png';


export default function Submarine() {
    return (
        <div className ="Submarine">

            {/*// submarine body*/}

            <img id="top" src={subTop}></img>
            <img id="fin" src={fin}></img>
            <div class="back"></div>
            <div class="body"></div>
        
            {/*// windows (numbered right to left)*/}

            <div className="frame">
            
            
            
            
            <img id="w2" src={whiteWindow}></img>
            <img id="w1" src={whiteWindow}></img>
            <img id="b3" src={blueWindow}></img>
            <img id="b2" src={blueWindow}></img>
            <img id="b1" src={blueWindow}></img>
            </div>

            {/*// arrows (numbered right to left)*/}

            <img id="a1" src={a1}></img>
            <img id="a2" src={a2}></img>
            <img id="a3" src={a3}></img>
            <img id="a4" src={a4}></img>
            <img id="a5" src={a5}></img>

            {/*// timeline rectangles*/}

            <img id="r1" src={rect}></img>
            <img id="r2" src={rect}></img>
            <img id="r3" src={rect}></img>
            <img id="r4" src={rect}></img>
            <img id="r5" src={rect}></img>

            {/*//bubbles (top to bottom)*/}

            <div className="bub1"></div>
            <div className="bub2"></div>
            <div className="bub3"></div>
            

            {/*// header and control sand*/}

            <img id="controlSand" src={sand}></img>
            <header>Project Timeline</header>
            <h1>Take me to the Controls!</h1>
            <h3>1</h3>
    
            
            
        </div>
    )
}
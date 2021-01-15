import React from 'react';

export default function Submarine() {
    return (
        <div className ="Submarine">

            {/*// submarine body*/}

            <img id="top" src="/images/submarine/subTop.png" />
            <img id="fin" src="/images/submarine/fin.png" />
            <div class="back"></div>
            <div class="body"></div>
        
            {/*// windows (numbered right to left)*/}

            <div className="frame">
            
            
            
            
            <img id="w2" src="/images/submarine/whiteWindow.png" />
            <img id="w1" src="/images/submarine/whiteWindow.png" />
            <img id="b3" src="/images/submarine/blueWindow.png" />
            <img id="b2" src="/images/submarine/blueWindow.png" />
            <img id="b1" src="/images/submarine/blueWindow.png" />
            </div>

            {/*// arrows (numbered right to left)*/}

            <img id="a1" src='/images/submarine/Arrow1.png' />
            <img id="a2" src='/images/submarine/Arrow2.png' />
            <img id="a3" src='/images/submarine/Arrow3.png' />
            <img id="a4" src='/images/submarine/Arrow4.png' />
            <img id="a5" src='/images/submarine/Arrow5.png' />

            {/*// timeline rectangles*/}

            <img id="r1" src='/images/submarine/timeRect.png' />
            <img id="r2" src='/images/submarine/timeRect.png' />
            <img id="r3" src='/images/submarine/timeRect.png' />
            <img id="r4" src='/images/submarine/timeRect.png' />
            <img id="r5" src='/images/submarine/timeRect.png' />

            {/*//bubbles (top to bottom)*/}

            <div className="bub1"></div>
            <div className="bub2"></div>
            <div className="bub3"></div>
            

            {/*// header and control sand*/}

            <img id="controlSand" src="/images/submarine/Vector.png" />
            <header>Project Timeline</header>
            <h1>Take me to the Controls!</h1>
            <h3>1</h3>
    
            
            
        </div>
    )
}
import React, { useState } from 'react';

export default function Timeline() {

    const [activeClass, setActiveClass] = useState('');   

    return (
        <div className ="timeline">
            <div className="timeline-submarine">
                <p className="timeline-submarine-title">Project Stages</p>
                <div className="timeline-submarine-windows">
                    <p onClick={() => setActiveClass('timeline-active1')}>1</p>
                    <p onClick={() => setActiveClass('timeline-active2')}>2</p>
                    <p onClick={() => setActiveClass('timeline-active3')}>3</p>
                    <p onClick={() => setActiveClass('timeline-active4')}>4</p>
                    <p onClick={() => setActiveClass('timeline-active5')}>5</p>
                    <p onClick={() => setActiveClass('timeline-active6')}>6</p>
                    <p onClick={() => setActiveClass('timeline-active7')}>7</p>
                </div>
            </div>
            <div className="timeline-stage">
                <p>Lorem Lorem ex veniam nostrud tempor eu aliqua exercitation reprehenderit sint aute pariatur consectetur.</p>
                <p>Commodo commodo dolor sint ipsum.</p>
                <p>Magna irure reprehenderit incididunt ex sit sit veniam voluptate amet excepteur amet consequat.</p>
                <p>Mollit enim fugiat labore duis et sunt sint.</p>
                <p>Sit est veniam duis non deserunt excepteur qui.</p>
                <p>Reprehenderit do ipsum duis occaecat irure ad nisi commodo est.</p>
                <p>Cupidatat nulla amet amet in velit cillum elit exercitation cillum.</p>
            </div>
        </div>
    )
}

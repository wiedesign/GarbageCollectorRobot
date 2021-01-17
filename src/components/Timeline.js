import React from 'react';

export default function Timeline() {

    let timelineDescription;

    let activeClass = [''];

    const firstActive = () => {
        activeClass.splice(0, 1);
        activeClass.push('timeline-active1');
        timelineDescription = (
            <p>First</p>
        )
        console.log(activeClass[0]);
    }

    const secondActive = () => {
        activeClass.splice(0, 1);
        activeClass.push('timeline-active2');
        timelineDescription = (
            <p>Second</p>
        )
        console.log(activeClass[0]);
    }

    const thirdActive = () => {
        activeClass.splice(0, 1);
        activeClass.push('timeline-active3');
        timelineDescription = (
            <p>Third</p>
        )
        console.log(activeClass[0]);
    }

    const fourthActive = () => {
        activeClass.splice(0, 1);
        activeClass.push('timeline-active4');
        timelineDescription = (
            <p>Fourth</p>
        )
        console.log(activeClass[0]);
    }

    const fifthActive = () => {
        activeClass.splice(0, 1);
        activeClass.push('timeline-active5');
        timelineDescription = (
            <p>Fifth</p>
        )
        console.log(activeClass[0]);
    }

    

    return (
        <div className ="timeline">
            <p className="timeline-title">Project Timeline</p>
            <div className={"timeline-submarine " + activeClass[0]}>
                <p onClick={firstActive}>1</p>
                <p onClick={secondActive}>2</p>
                <p onClick={thirdActive}>3</p>
                <p onClick={fourthActive}>4</p>
                <p onClick={fifthActive}>5</p>
            </div>
            {timelineDescription}
        </div>
    )
}

import React from 'react';

export default function Timeline() {
 

    return (
        <div className ="timeline">
            <div className="timeline-bubbles bubbles-1" />
            <div className="timeline-bubbles bubbles-2" />
            <div className="timeline-bubbles bubbles-3" />
            <div className="timeline-submarine">
                <p className="timeline-submarine-title">Project Stages</p>
                <div className="timeline-submarine-windows">
                    <div>
                        <p>1</p>
                        <p>Research</p>
                    </div>
                    <div>
                        <p>2</p>
                        <p>Design</p>
                    </div>
                    <div>
                        <p>3</p>
                        <p>Prototype</p>
                    </div>
                    <div>
                        <p>4</p>
                        <p>Testing</p>
                    </div>
                    <div>
                        <p>5</p>
                        <p>Design<br />Improvements</p>
                    </div>
                    <div>
                        <p>6</p>
                        <p>Production</p>
                    </div>
                    <div>
                        <p>7</p>
                        <p>Final<br />Testing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

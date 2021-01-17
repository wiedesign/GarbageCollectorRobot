import React from 'react'

export default function FirstPage() {
    return (
        <div className="first-page">
            <img src="/images/logo.png" alt="" className="first-page-logo" />
            <div className="first-page-container">
                <img src="/images/blue-robot.png" alt="" />
                <div className="first-page-container-info">
                    <p>Robot</p>
                    <p>Version #</p>
                    <p>Get Started</p>
                </div>
            </div>
            <img src="/images/turtle.png" alt="" />
        </div>
    )
}

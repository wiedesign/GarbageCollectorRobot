import React from 'react'
import { Link } from "react-router-dom";

const Sponsorship: React.FC = () =>{
    return (
        <section className="sponsorship">
            <Link to="/"><img className="sponsorship__anchor" src="/images/logo.png" alt="" /></Link>
            <div className="sponsorship__intro">
                <p className="sponsorship__intro__text">
                    Women in Engineering Design would not be 
                    possible without the continued support and 
                    guidance from our sponsors.  
                    We are grateful for their efforts in 
                    encouraging self identifying women in 
                    engineering and are honoured to work 
                    together in furthering diversity in the 
                    applied sciences.
                </p>
            </div>
            <div className="sponsorship__robot__container">
                <img className="sponsorship__robot" src="/images/sponsorship/robot-sponsorship.svg" />
                <img className="sponsorship__robot__heart" src="/images/sponsorship/robot-heart.svg" />
            </div>
            <div className="sponsorship__list">
                <div className="sponsorship__list__bubble" />
                <div className="sponsorship__list__bubble" />
                <div className="sponsorship__list__bubble" />
                <div className="sponsorship__list__bubble" />
                <div className="sponsorship__list__bubble" />
                <div className="sponsorship__list__bubble" />
                <div className="sponsorship__list__title">
                    <p className="sponsorship__list__title__text">Our Sponsors</p>
                </div>
                <p className="sponsorship__list__level">Gold Level</p>
                <div className="sponsorship__list__item">
                    <img className="sponsorship__list__item__image" src="/images/sponsorship/green-sky.svg"/>
                    <p className="sponsorship__list__item__description">
                        As a bespoke consultancy service, Green Sky is able to 
                        partner with other specialists within the field to create 
                        a custom, tailor-made team for each individual client. We 
                        specialize in delivering enhanced business performance through 
                        improved sustainability solutions. Our goal is to help 
                        organizations understand the importance of sustainable 
                        business practice, identify issues of sustainability 
                        within your existing setup, and work with you to provide 
                        support as well as solutions. We provide climate change 
                        mitigation, adaptation, and related sustainability services. 
                        This means GHG verification for reports and offset projects, 
                        GHG quantification and carbon footprinting, Life Cycle 
                        Assessments, offset project development, and more – all 
                        customized to your business.
                    </p>
                </div>
                <p className="sponsorship__list__level">In-Kind</p>
                <div className="sponsorship__list__item">
                    <img className="sponsorship__list__item__image" src="/images/sponsorship/zaber.svg"/>
                    <p className="sponsorship__list__item__description">
                        Zaber Technologies is a steadily growing, employee-owned 
                        company which designs, manufactures, and sells precision 
                        motion control equipment for high-tech markets around the world. 
                        We strive to create an open, friendly, and high-achieving work 
                        environment. Our staff are progressive, enthusiastic individuals 
                        whose hobbies and interests are reflected in the work we do. Some
                        aspects of Zaber that our employees especially enjoy include the
                        people, the sense of community, flexible hours, level of 
                        employee engagement, and opportunities to learn. Most of us 
                        cycle, bus, or carpool to work and put in extra effort to make 
                        sustainable choices. Last, but not least, our office has several 
                        friendly dogs.
                    </p>
                </div>
            </div>
        </section>
    )
};
export default Sponsorship;


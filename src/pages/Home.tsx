import React from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    function expandText_1() {
        let text_snippets = document.getElementsByClassName('description_1') as HTMLCollectionOf<HTMLElement>;
        let action_link = document.getElementsByClassName('action_description_1') as HTMLCollectionOf<HTMLElement>;
        if(action_link[0].innerHTML=="see more") {
            text_snippets[0].style.height = "100%";
            action_link[0].innerHTML= "see less";
        }
        else {
            text_snippets[0].style.height = "113px";
            action_link[0].innerHTML = "see more";
        }
    }

    function expandText_2() {
        let text_snippets = document.getElementsByClassName('description_2') as HTMLCollectionOf<HTMLElement>;
        let action_link = document.getElementsByClassName('action_description_2') as HTMLCollectionOf<HTMLElement>;
        if(action_link[0].innerHTML=="see more") {
            text_snippets[0].style.height = "100%";
            action_link[0].innerHTML="see less";
        }
        if(action_link[0].innerHTML == "113px") {
            text_snippets[0].style.height = "50%";
            action_link[0].innerHTML = "see more";
        }
    }

    return (
        <section className="home">

            <div className="home__intro">
                <div className="home__intro__bubbles bubbles--1" />
                <div className="home__intro__bubbles bubbles--2" />
                <div className="home__intro__bubbles bubbles--3" />
                <div className="home__intro__bubbles bubbles--4" />
                <div className="home__intro__bubbles bubbles--5" />
                <div className="home__intro__bubbles bubbles--6" />
                <div className="home__intro__bubbles bubbles--7" />
                <div className="home__intro__bubbles bubbles--8" />
                <div className="home__intro__bubbles bubbles--9" />
                <img src="/images/logo.png" alt="" className="home__intro__logo" />
                <div className="home__intro__container">
                    <div className="home__intro__container__image" />
                    <p className="home__intro__container__info">ROBERTA <br /> 1v1.0</p>
                </div>
                <img src="/images/turtle1.png" alt="" className="home__intro__turtle"/>
            </div>
        
            <div className= "home__about">
                <p className="home__about__title">About WiE Design Team</p>
                <p className="home__about__body">
                    Women in Engineering Design Team (WiE Design) is a small technical club
                    that is a subset of the larger Women in Engineering club at Simon Fraser
                    University. WiE Design consists of self-identifying females and other
                    under-represented groups in STEM. We have members from a wide range of
                    programs such as Computer engineering, Systems engineering, Electronics
                    engineering, Bio-med engineering, Mechatronics engineering, Communications
                    and Business. Our goal is to give women a safe and uninterrupted platform
                    to share, and listen to ideas from other women, build their design knowledge
                    and technical skills in fields such as engineering, marketing and business,
                    and most importantly to gain confidence in their abilities.
                </p>
            </div>

            <div className="home__robot">
                <img className="home__robot__turtle" src="/images/turtle2.png" alt="" />
                <div className="home__robot__top">
                    <div className="home__robot__top__bubbles bubble--1" />
                    <div className="home__robot__top__bubbles bubble--2" />
                    <div className="home__robot__top__bubbles bubble--3" />
                </div>
                <p className="home__robot__text">Meet<br/>Our<br/>Robot</p>
                <div className="home__robot__bottom">
                    <div className="home__robot__bottom__bubbles bubble--4" />
                    <div className="home__robot__bottom__bubbles bubble--5" />
                    <div className="home__robot__bottom__bubbles bubble--6" />
                </div>
                <div className="home__robot__model">
                    <model-viewer
                        src={"/3d-model/SN_RobotAssembly.glb"}
                        alt="A 3D model of a robot"
                        auto-rotate=""
                        camera-controls=""
                    />
                </div>
                <div className="home__robot__name">
                    <p className="home__robot__name__title">ROBERTA</p>
                    <p className="home__robot__name__subtitle">Remote Operated Bot for the Expedited Retrieval of Trash</p>
                    <p className="home__robot__name__body">
                        ROBERTA is a mobile base IoT garbage-collector robot. 
                        ROBERTA can be remotely controlled via BLE and wifi communication using our web-app.
                        The robot is equipped with a grapple claw loader to help pick up any waste and includes
                        a trailer to store the waste in. Robot also has a camera that streams live video of its 
                        surroundings to the user. In future, WiE Design Team plans to make the robot semi-autonomous/fully 
                        autonomous by implementing machine learning and object detection.
                    </p>
                    <div className="home__robot__name__bubbles bubble--7" />
                    <div className="home__robot__name__bubbles bubble--8" />
                    <div className="home__robot__name__bubbles bubble--9" />
                </div>
            </div>

            <div className ="home__timeline">
                <div className="home__timeline__bubbles bubbles--1" />
                <div className="home__timeline__bubbles bubbles--2" />
                <div className="home__timeline__bubbles bubbles--3" />
                <div className="home__timeline__submarine">
                    <p className="home__timeline__submarine__title"><b>Project Stages</b></p>
                    <div className="home__timeline__submarine__windows">
                        <div className="home__timeline__submarine__windows__window">
                            <p className="home__timeline__submarine__windows__window__number">1</p>
                            <p className="home__timeline__submarine__windows__window__text">Research</p>
                        </div>
                        <div className="home__timeline__submarine__windows__window">
                            <p className="home__timeline__submarine__windows__window__number">2</p>
                            <p className="home__timeline__submarine__windows__window__text">Design</p>
                        </div>
                        <div className="home__timeline__submarine__windows__window">
                            <p className="home__timeline__submarine__windows__window__number">3</p>
                            <p className="home__timeline__submarine__windows__window__text">Prototype</p>
                        </div>
                        <div className="home__timeline__submarine__windows__window">
                            <p className="home__timeline__submarine__windows__window__number">4</p>
                            <p className="home__timeline__submarine__windows__window__text">Testing</p>
                        </div>
                        <div className="home__timeline__submarine__windows__window">
                            <p className="home__timeline__submarine__windows__window__number">5</p>
                            <p className="home__timeline__submarine__windows__window__text">Design Improvements</p>
                        </div>
                        <div className="home__timeline__submarine__windows__window">
                            <p className="home__timeline__submarine__windows__window__number">6</p>
                            <p className="home__timeline__submarine__windows__window__text">Production</p>
                        </div>
                        <div className="home__timeline__submarine__windows__window">
                            <p className="home__timeline__submarine__windows__window__number">7</p>
                            <p className="home__timeline__submarine__windows__window__text">Final Testing</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__progress">
                <p className="home__progress__title">Project Progress</p>
                <p className="home__progress__research"><b>Research:</b> Research scope of project, high level hardware 
                    components, sensors, actuators, communication protocols, web interface.    
                </p>
                <p className="home__progress__design"><b>Design:</b> Designing methods for garbage collection and storage mechanism.    
                </p>
                <p className="home__progress__communication"><b>Communication:</b> Implementing IoT based communication between web-app and ESP32-Wroom-32 microcontroller.  
                </p>
                <p className="home__progress__mobility"><b>Robot Mobility:</b> Research, implementing base motor controller, 
                    designing and printing chassis, executing base movement controls on web-app.    
                </p>
                <p className="home__progress__body"><b>Body and Trailer:</b> Research, designing and assembling robot body and trailer with garbage-collection box.  
                </p>
                <p className="home__progress__links"><b>Robot Links and Loader:</b> Research, printing robotic links with a grapple claw loader 
                    as the end effector, implementing arm and claw movements with steppers, adding UI controls.  
                </p>
                <p className="home__progress__head"><b>Robot Head:</b> Research, designing and printing robot head, include recycled PCBs as a 
                    design aesthetic feature, research optimal video streaming protocol/communication method, 
                    include camera and live video streaming to the web-app.
                </p>
            </div>

            <div className="home__sponsorship">
                <div className="home__sponsorship__robot__container">
                    <img className="home__sponsorship__robot" src="/images/sponsorship/robot-sponsorship.svg" />
                    <img className="home__sponsorship__robot__heart" src="/images/sponsorship/sponsorship_heart.png" />
                </div>
                <div className="home__sponsorship__intro">
                    <p className="home__sponsorship__intro__title">Our Sponsors</p>
                    <p className="home__sponsorship__intro__text">
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
                
                <div className="home__sponsorship__list">
                    <p className="home__sponsorship__list__level">Gold Level</p>
                    <div className="home__sponsorship__list__item">
                        <img className="home__sponsorship__list__item__image-1" src="/images/sponsorship/green-sky.svg"/>
                        <p className="home__sponsorship__list__item__description description_1">
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
                        </p><a onClick={expandText_1} className="action_description_1">see more</a>
                    </div>
                    <p className="home__sponsorship__list__level">In-Kind</p>
                    <div className="home__sponsorship__list__item">
                        <img className="home__sponsorship__list__item__image-2" src="/images/sponsorship/zaber.svg"/>
                        <p className="home__sponsorship__list__item__description description_2">
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
                        <a onClick={expandText_2} className="action_description_2">see more</a>
                    </div>
                </div>
            </div>

            <div className="home__controls">
                <Link to="/controls" className="home__controls__text">Click for Controls</Link>
            </div>

        </section>  
    )
};

export default Home;
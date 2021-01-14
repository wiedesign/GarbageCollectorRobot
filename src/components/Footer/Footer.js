import React from 'react';
import './Footer.css';
import fb from './facebook.png';
import ig from './instagram.png';
import linkedin from './linkedin.png';

export default function Footer() {
    return (
        
        <div className="footer">
            

            

            <ul id="flex-container">
                <li id="title" class="flex-item">Contact Us</li>
                <li class="flex-item">email: wie@sfu.ca</li>
                <div className="icons">
                <li class="flex-item" ><a href="#"><img src={fb}></img></a></li>
                <li class="flex-item" ><a href="#"><img src={linkedin}></img></a></li>
                <li class="flex-item" ><a href="#"><img src={ig}></img></a></li>
                </div>

                
                
            </ul>
            
        </div>
    )
}

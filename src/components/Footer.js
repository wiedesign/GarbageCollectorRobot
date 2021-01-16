import React from 'react';

export default function Footer() {
    return (
        <div className="footer" id="footerTest">
            <div className="footer-container">
                <p className="footer-container-title">Contact Us</p>
                <p className="footer-container-email">email: wie@sfu.ca</p>
                <div className="footer-container-icons">
                    <a href="https://www.facebook.com/groups/sfuwie/" target="_blank" rel="noopener noreferrer" >
                        <img src="/images/footer/facebook.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/groups/8546476/" target="_blank" rel="noopener noreferrer" >
                        <img src="/images/footer/linkedin.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/wiesfu/" target="_blank" rel="noopener noreferrer" >
                        <img src="/images/footer/instagram.png"alt="" />
                    </a>
                </div>
            </div>
            <p className="footer-text">Webapp created by WiE Design Team</p>
        </div>
    )
}

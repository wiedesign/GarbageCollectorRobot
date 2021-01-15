import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <p className="footer-title">Contact Us</p>
            <p className="footer-email">email: wie@sfu.ca</p>
            <div className="footer-icons">
                <a href="#">
                    <img src="/images/footer/facebook.png" alt="" />
                </a>
                <a href="#">
                    <img src="/images/footer/linkedin.png" alt="" />
                </a>
                <a href="#">
                    <img src="/images/footer/instagram.png"alt="" />
                </a>
            </div>
        </div>
    )
}

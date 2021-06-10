import React from 'react';

const Footer: React.FC = () => {
    return (
        <section className="footer">
            <div className="footer__container">
                <p className="footer__container__title">Contact Us</p>
                <p className="footer__container__email">email: wie@sfu.ca</p>
                <div className="footer__container__icons">
                    <a href="https://www.facebook.com/wiesfu" target="_blank" rel="noopener noreferrer" className="footer__container__icons__links">
                        <img src="/images/footer/facebook.png" alt="" className="footer__container__icons__links__logo" />
                    </a>
                    <a href="https://www.linkedin.com/groups/8546476/" target="_blank" rel="noopener noreferrer" className="footer__container__icons__links">
                        <img src="/images/footer/linkedin.png" alt="" className="footer__container__icons__links__logo" />
                    </a>
                    <a href="https://www.instagram.com/wiesfu/" target="_blank" rel="noopener noreferrer" className="footer__container__icons__links">
                        <img src="/images/footer/instagram.png" alt="" className="footer__container__icons__links__logo" />
                    </a>
                </div>
                <a href="http://www.sfu.ca/clubs/wie.html" target="_blank" rel="noopener noreferrer" className="footer__container__links">Visit WiE SFU club website</a>
            </div>
            <p className="footer__text">Webapp created by WiE Design Team</p>
        </section>
    )
}

export default Footer;
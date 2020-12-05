import React, {} from 'react';

const Header = () => {
    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="/" className="logo"><img src="assets/images/icon.png" alt="Shyno icon" height="70px" width="auto" style={{position: 'fixed', left: 10, top: 5}}></img></a>
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#welcome" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="#about">About</a></li>
                            <li className="scroll-to-section"><a href="#services">Services</a></li>
                            <li className="scroll-to-section"><a href="#contact-us">Contact Us</a></li>
                        </ul>
                        <a className='menu-trigger' href="/">
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;
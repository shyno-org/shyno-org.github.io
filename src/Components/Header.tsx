import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <Link to="/" className="logo"><img src="assets/images/icon.png" alt="Shyno icon" height="70px" width="auto" style={{position: 'fixed', left: 10, top: 5}}></img></Link>
                        <ul className="nav">
                            <li className="scroll-to-section"><Link to="/">Home</Link></li>
                            <li className="scroll-to-section"><Link to="/education">Education</Link></li>
                            <li className="scroll-to-section"><Link to="/about">About</Link></li>
                            <li className="scroll-to-section"><Link to="/contact">Contact Us</Link></li>
                        </ul>
                        <button className='menu-trigger'>
                            <span>Menu</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;
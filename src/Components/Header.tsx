import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      // <header className="header-area header-sticky">
      // <div className="container">
      //     <div className="row">
      //         <div className="col-12">
      //             <nav className="main-nav">
      //                 <Link to="/" className="logo"><img src="assets/images/icon.png" alt="Shyno icon" height="70px" width="auto" style={{position: 'fixed', left: 10, top: 5}}></img></Link>
      //                 <ul className="nav">
      //                     <li className="scroll-to-section"><Link to="/">Home</Link></li>
      //                     <li className="scroll-to-section"><Link to="/education">Education</Link></li>
      //                     <li className="scroll-to-section"><Link to="/about">About</Link></li>
      //                     <li className="scroll-to-section"><Link to="/contact">Contact Us</Link></li>
      //                 </ul>
      //                 <button className='menu-trigger'>
      //                     <span>Menu</span>
      //                 </button>
      //             </nav>
      //         </div>
      //     </div>
      // </div>
      // </header>
      <Navbar bg="dark" expand="md" className="text-white">
        <Navbar.Brand href="/" className="text-white font-weight-bold">
          <img
            alt=""
            src="assets/images/icon.png"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fas fa-bars text-white"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/" className="btn shadow text-light m-1 p-1">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/products" className="btn shadow text-light m-1 p-1">
                Products
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/education" className="btn shadow text-light m-1 p-1">
                Education
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="btn shadow text-light m-1 p-1">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="btn shadow text-light m-1 p-1">
                Contact Us
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;
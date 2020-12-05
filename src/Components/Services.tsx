import React from 'react'

const Services = () => {
    return (
      <section className="section" id="services">
        <div className="container">
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item service-item">
                <div className="icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h5 className="service-title">Web Development</h5>
                <p>
                  We can build and maintain a professional static website or
                  dynamic web application for your business based on your needs.
                </p>
                <a href="/" className="main-button">
                  Read More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h5 className="service-title">Mobile App Development</h5>
                <p>
                  We can build an Android App or an IOS App or a Cross platform
                  App for your business/personal use based on your requirements.
                </p>
                <a href="/" className="main-button">
                  Discover More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i className="fas fa-laptop-house"></i>
                </div>
                <h5 className="service-title">Smart Home Services</h5>
                <p>
                  We can build customized smart home services with your own
                  personal touch. Transform your ordinary home into smart home.
                </p>
                <a href="/" className="main-button">
                  Discover
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h5 className="service-title">AI and Automation</h5>
                <p>
                  We can build customize AI and Automation system for your
                  business. Feel free to share you ideas with us.{" "}
                </p>
                <a href="." className="main-button">
                  More Detail
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i className="fas fa-pen-fancy"></i>
                </div>
                <h5 className="service-title">Logo Design</h5>
                <p>
                  We can design a professional Logo to make your
                  business/organization look professional and sophisticated.{" "}
                </p>
                <a href="/" className="main-button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    ); 
}

export default Services;
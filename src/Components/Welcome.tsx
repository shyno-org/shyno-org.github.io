import React from 'react'

const Welcome = () => {
    return (
        <div className="welcome-area" id="welcome">
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <br/>
                        <h1>Professional tech solutions for <strong>Your Business</strong></h1>
                        <p><b>We can make technology accessible!</b></p>
                        
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <img src="assets/images/slider-icon.png" className="rounded img-fluid d-block mx-auto" alt="First Vector Graphic"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Welcome;
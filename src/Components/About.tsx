import Services from './Services'
const About = () => {
    return (
      <>
        <section className="section" id="about">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-7 col-md-12 col-sm-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/left-image.png"
                  className="rounded img-fluid d-block mx-auto"
                  alt="App"
                ></img>
              </div>
              <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                <div className="left-heading">
                  <h5>Who we are?</h5>
                </div>
                <div className="left-text">
                  <p>
                    We are a team of passionate developers, designers and
                    engineers finding best solutions for businesses. We
                    continuously develop products and brainstorm ideas for the
                    people. Our goal is to{" "}
                    <strong>make the world a better place.</strong>
                  </p>
                  <a href="#about2" className="main-button">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="hr"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="about2">
          <div className="container">
            <div className="row">
              <div className="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                <div className="left-heading">
                  <h5>What we do?</h5>
                </div>
                <p>
                  We develop technical solutions for your business, putting it
                  ahead of its competitors by harnessing the power of technology
                  and communication.
                </p>
                <ul>
                  <li>
                    <img src="assets/images/about-icon-01.png" alt=""></img>
                    <div className="text">
                      <h6>Web, Desktop and App Development</h6>
                      <p>
                        We can develop both web and mobile app solutions for
                        your business based on your needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src="assets/images/about-icon-02.png" alt=""></img>
                    <div className="text">
                      <h6>Logo Design</h6>
                      <p>
                        We can design your business logo which will suit your
                        business and activity.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src="assets/images/about-icon-03.png" alt=""></img>
                    <div className="text">
                      <h6>Automation and Accessibility System</h6>
                      <p>
                        We can design and develop world class automation and
                        accessibility systems for your business as well as
                        individuals.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/right-image.png"
                  className="rounded img-fluid d-block mx-auto"
                  alt="App"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <Services />
      </>
    );
}

export default About;
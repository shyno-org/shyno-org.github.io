const Education = () => {
  return (
    <>
      <section className="about py-5" style={{ paddingTop: 80 }} id="about">
        {/* <header>
          <div className="container-fluid banner d-flex align-items-center justify-content-center">
            
          </div>
        </header> */}

        <div className="container">
          <div className="row flex-md-row-reverse">
            <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
              <div className="about-img__container">
                <img
                  src="assets/images/banner2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-10 mx-auto col-md-6 my-5">
              <div className="pl-1 pl-lg-4">
                <h1 className="text-capitalize text-slanted font-weight-bold mb-2">
                  Workshop on IoT
                </h1>
                <h4 className="text-uppercas ">
                  <span style={{ color: "#fdbe02" }}>Date:</span> 18
                  <sup>th</sup> January 2021
                </h4>
                <h4 className="text-uppercas ">
                  <span style={{ color: "#fdbe02" }}>Time:</span> 11:30 AM
                </h4>
                <h4 className="">
                  <span style={{ color: "#fdbe02" }}>Place:</span>
                  {
                    " Shyno Office"
                  }
                  <a
                    href="https://goo.gl/maps/HYcBcV9U2ecUe2HJA"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#000000", fontSize: 24 }}
                  >
                    {" "}<i className="fas fa-map-marked-alt"></i>
                  </a>
                </h4>
                <h4 className="">
                  <span style={{ color: "#fdbe02" }}>
                    Registration Starts on:
                  </span>{" "}
                  10<sup>th</sup> January 2021
                </h4>
                <div className="mt-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSezZKV92_IuSyMdOgkfLNWtgs5oR9nzV33_zSEmhGX8hv51PA/viewform?usp=sf_link"
                    className="btn btn-dark btn-outline-warning mr-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Grab Your Seat
                  </a>
                  {/* <a
                    href="/enroll"
                    className="btn btn-light btn-outline-primary ml-2 btn-disabled"
                  >
                    Feedback
                  </a> */}
                </div>
              </div>
              {/* <h1 className="text-capitalize text-center">
                <strong>about </strong>
              </h1> */}
              <p className="my-4 text-muted">
                In this workshop, we are going to know about some basic
                electrical terms, such as Voltage, Current, Resistance, etc. and
                some very useful electronics components like Diode, Transistor,
                Capacitor, LED, IC, etc. <br />
                We will do some practical work to better understand how they
                actually work. We will also learn how to use a Multimeter and so
                on.
                <br /> At the end of the workshop, we will provide a
                participation certificate. The workshop registration fee is{" "}
                <strong>&#8377;0</strong>. and it is going to be held on 10th
                January 2021 at Shyno's office.
                <br />
                For more information please feel free to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;

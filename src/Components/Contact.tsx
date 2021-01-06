import React from 'react'

const Contact = () => {
    return (
      <section className="section" id="contact-us" style={{ paddingTop: 80 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div id="map">
                <iframe
                  title="Address on Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2797.841546881993!2d9.225740432739258!3d45.47299575805664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97db1e358310d%3A0x68b454664420aa24!2sShyno!5e0!3m2!1sen!2sin!4v1609963635763!5m2!1sen!2sin"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="contact-form">
                <form
                  id="contact"
                  className="pageclip-form"
                  action="https://send.pageclip.co/EN26bEy3vqOrtllz2cDa1wQVVrBdCpkq/contact-form"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Full Name"
                          required={true}
                          className="contact-field"
                        ></input>
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="E-mail"
                          required={true}
                          className="contact-field"
                        ></input>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows={6}
                          id="message"
                          placeholder="Your Message"
                          required={true}
                          className="contact-field"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button pageclip-form__submit"
                        >
                          Send It
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;
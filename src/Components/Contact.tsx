import React from 'react'

const Contact = () => {
    return (
      <section className="section" id="contact-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div id="map">
                <iframe
                  title="Address on Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.8129979223822!2d88.25333021386173!3d24.10807088093779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dc2e19b045b%3A0x60f3407f6fcbfa51!2s61%2F12%2C%20A%20C%20Rd%2C%20Indraprastha%2C%20Khagra%2C%20Berhampore%2C%20West%20Bengal%20742103!5e0!3m2!1sen!2sin!4v1605424794237!5m2!1sen!2sin"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
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
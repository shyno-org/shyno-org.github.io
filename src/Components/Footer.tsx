import React from 'react'

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p className="copyright">Copyright &copy; 2020 Shyno </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/shyno.fb">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="/">
                    <i className="fa fa-rss"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="https://wa.me/">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://wa.me/9046391399">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
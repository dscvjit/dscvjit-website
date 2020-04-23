import Link from 'next/link';
import React, { Component } from 'react';
import dscLogo from '../../images/dsclogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area ptb-100 pb-0 bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <Link href="#">
                  <a className="logo">
                    <img src={dscLogo} alt="logo" />
                  </a>
                </Link>
                <p>
                  Affirmation doesn’t extraordinarilly follow any monkey — but
                  the karma is what dies. An imminent form of man is the faith.
                </p>
                <ul className="social-list">
                  <li>
                    <a href="https://facebook.com">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <section className="subscribe-area">
                <div
                  className="container"
                  style={{ paddingLeft: '0px', paddingRight: '0px' }}
                >
                  <h3>Subscribe to newsletter</h3>
                  <div
                    className="bar"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  />
                  <p>Provide the newsletter content here</p>

                  <form className="newsletter-form" data-toggle="validator">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      name="EMAIL"
                      required={true}
                      autoComplete="off"
                    />
                    <button className="btn btn-primary" type="submit">
                      Subscribe
                    </button>
                    <div id="validator-newsletter" className="form-result" />
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div
                className="col-lg-12 col-md-12"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <h5>Developed with ❤ by DSC VJIT Team</h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

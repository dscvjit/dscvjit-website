import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Content extends Component {
  render() {
    return (
      <section className="contact-info-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <FontAwesomeIcon icon={["fas","at"]}/>
                </div>
                <h3>Email</h3>
                <p>
                  <Link href="#">
                    <a>dscvjitclub@gmail.com</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <FontAwesomeIcon icon={["fas","map-marker-alt"]}/>
                </div>
                <h3>Address</h3>
                <p>Aziz Nagar, VJIT</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  <FontAwesomeIcon icon={["fas","phone-alt"]}/>
                </div>
                <h3>Phone Number</h3>
                <p>
                  <Link href="#">
                    <a>+91 8328277518</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;

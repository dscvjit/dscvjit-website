import Link from 'next/link';
import React, { Component } from 'react';
import dscLogo from '../../images/dsclogo.webp';
import Subscribe from './Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area bg-image">
        <Subscribe />
        <div className="container">
          <div className="row">
            <Grid
              container
              direction="column"
              justify={'center'}
              alignItems={'center'}
              spacing={2}
            >
              <Grid item>
                <div className="single-footer-widget">
                  <Link href="/">
                    <a className="logo">
                      <img src={dscLogo} alt="logo" />
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <div
                  className="social-icons-list "
                  style={{ marginTop: '15px' }}
                >
                  <ul className="social-list" style={{ paddingLeft: '0px' }}>
                    <li>
                      <a href="https://www.facebook.com/dscvjit/">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/dscvjit">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/dscvjit/">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/dscvjit">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid container alignItems={'center'} justify={'center'}>
              <Grid item>
                <div className="copyright-area" style={{ marginTop: '20px' }}>
                  <div className="container">
                    <div className="row h-50 justify-content-center align-items-center">
                      <div
                        className="col-lg-12 col-md-12"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <h5>Developed with ❤ by Team Ezerka</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

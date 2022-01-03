import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section className="page-title-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Projects</h2>
              <a
                href="https://bit.ly/36tkGsb"
                style={{ marginTop: '20px' }}
                className="btn btn-primary"
              >
                Add your Project
              </a>
            </div>
          </div>
        </div>

        <div className="shape1">
          <img src={require('../../images/shape1.png')} alt="img" />
        </div>
        <div className="shape2">
          <img src={require('../../images/shape2.png')} alt="img" />
        </div>
        <div className="shape3">
          <img src={require('../../images/shape3.png')} alt="img" />
        </div>
        <div className="shape6">
          <img src={require('../../images/shape6.png')} alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src={require('../../images/shape8.svg')} alt="shape" />
        </div>
        <div className="shape9">
          <img src={require('../../images/shape9.svg')} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Banner;

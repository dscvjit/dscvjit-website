import React from 'react';

const Banner = () => {
  return (
    <section className="page-title-banner" style={{ paddingBottom: '0px' }}>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Lets Talk !</h2>
            <div className="bar" />
            <p>Would like to sponsor an event. Get in touch with us!</p>
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
};

export default Banner;

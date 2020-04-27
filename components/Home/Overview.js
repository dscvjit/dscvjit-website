import React, { Component } from 'react';
import homeWhatImage from '../../images/home-what.webp';
import homeWhyImage from '../../images/home-why.webp';
import homeLastImage from '../../images/home-last.png';

class Overview extends Component {
  render() {
    return (
      <section className="overview-section ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img src={homeWhyImage} alt="image" />
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div className="features-holder-content">
                  <div className="section-title">
                    <h2>Connect With DSC VJIT</h2>
                    <div className="bar" />
                    <p>
                      Meet other students on campus interested in developer
                      technologies. All are welcome, including those with
                      diverse backgrounds and different majors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-content">
                <div className="features-holder-content">
                  <div className="section-title">
                    <h2>Why Join DSC VJIT</h2>
                    <div className="bar" />
                    <p>
                      Learn about a wide range of technical topics where new
                      skills are gained through hands-on workshops, in-person
                      training and project building activities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 overview-img">
                <img src={homeWhatImage} alt="image" />
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img src={homeLastImage} alt="image" />
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div className="features-holder-content">
                  <div className="section-title">
                    <h2>Grow With DSC VJIT</h2>
                    <div className="bar" />
                    <p>
                      Apply your new learnings and connections to build great
                      solutions for local problems. Advance your skills, career
                      and network. Give back to your community by helping others
                      learn as well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img src={require('../../images/shape7.png')} alt="shape" />
        </div>
        <div className="shape3">
          <img src={require('../../images/shape3.png')} alt="img" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img src={require('../../images/shape6.png')} alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src={require('../../images/shape8.svg')} alt="shape" />
        </div>
        <div className="shape9">
          <img src={require('../../images/shape9.svg')} alt="shape" />
        </div>
        <div className="shape10">
          <img src={require('../../images/shape10.svg')} alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src={require('../../images/shape11.svg')} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Overview;

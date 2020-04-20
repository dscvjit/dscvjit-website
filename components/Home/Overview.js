import React, { Component } from 'react';
import Link from 'next/link';
import homeWhatImage from '../../images/home-what.png'
import homeWhyImage from '../../images/home-why.png'
import homeLastImage from '../../images/home-last.png'

class Overview extends Component {
    render() {
        return (
            <section className="overview-section ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={homeWhatImage} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="features-holder-content">
                                    <div className="section-title">
                                        <h2>What is Developer Student Clubs</h2>
                                        <div className="bar"></div>
                                        <p>Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
                                    </div>
                                    <Link href="#">
                                        <a className="btn btn-primary">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="features-holder-content">
                                    <div className="section-title">
                                        <h2>Why Join Developer Student Clubs VJIT</h2>
                                        <div className="bar"></div>
                                        <p>Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
                                    </div>
                                    <Link href="#">
                                        <a className="btn btn-primary">Join DSC VJIT</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src={homeWhyImage} alt="image" />
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
                                        <h2>Some Another Catchy Title ? </h2>
                                        <div className="bar"></div>
                                        <p>Catchy Content</p>
                                    </div>
                                    <Link href="#">
                                        <a className="btn btn-primary">Catchy Button  :)</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="shape7"><img src={require('../../images/shape7.png')} alt="shape" /></div>
                <div className="shape3"><img src={require('../../images/shape3.png')} alt="img" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6"><img src={require('../../images/shape6.png')} alt="img" /></div>
                <div className="shape8 rotateme"><img src={require('../../images/shape8.svg')} alt="shape" /></div>
                <div className="shape9"><img src={require('../../images/shape9.svg')} alt="shape" /></div>
                <div className="shape10"><img src={require('../../images/shape10.svg')} alt="shape" /></div>
                <div className="shape11 rotateme"><img src={require('../../images/shape11.svg')} alt="shape" /></div>
            </section>
        );
    }
}

export default Overview;

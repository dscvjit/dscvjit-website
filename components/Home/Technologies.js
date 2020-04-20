import React, {Component} from 'react';
import javascriptLogo from '../../images/icons/javascript-logo.svg'
import androidLogo from '../../images/icons/android-logo.svg'
import cloudLogo from '../../images/icons/cloud-logo.svg'
import reactLogo from '../../images/icons/react-logo.svg'
import machineLogo from '../../images/icons/machine-learning-logo.svg'
import pythonLogo from '../../images/icons/python-logo.svg'

class Technologies extends Component {
    render() {
        return (
            <section className="services-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Technologies</h2>
                        <div className="bar"></div>
                        <p>These are some technolgies we mainly focus on right now. If you cant find the
                            technology you love. Click here!!!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={javascriptLogo} alt="javascript"/>
                                <h3>JavaScript</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={androidLogo} alt="android"/>

                                <h3>Android App Development</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={cloudLogo} alt="cloud logo"/>

                                <h3>Google Cloud</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={reactLogo} alt="react"/>

                                <h3>React JS</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={pythonLogo} alt="python"/>

                                <h3>Python</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <img src={machineLogo} alt="machine"/>

                                <h3>Machine Learning</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Technologies;

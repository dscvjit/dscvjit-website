import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import homeImage from '../../images/home.png'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-banner marketing-home">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content">
                                            <h1>Developers Student Clubs <br/></h1>
                                            <h1 style={{fontWeight: 700}}>VJIT</h1>
                                            <p>DSC VJIT is one of the different Developer Students Club throughout
                                                India.
                                                Our main goal at DSC VJIT is to increase the skills, collaboration among
                                                students and to create a community which help solve the different issues
                                                which are faced around our locality.</p>

                                            <Link href="/">
                                                <a className="btn btn-primary">Join DSC VJIT</a>
                                            </Link>

                                            <div className="social-icons-list" style={{marginTop: '15px'}}>
                                                <ul className="social-list" style={{paddingLeft: "0px"}}>
                                                    <li>
                                                        <a href="https://facebook.com"><i className="icofont-facebook"/></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com"><i
                                                            className="icofont-twitter"/></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com"><i className="icofont-instagram"/></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://github.com"><i className="icofont-github"/></a>
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="marketing-image">
                                            <img
                                                src={homeImage}
                                                className="wow fadeInDown"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img
                                                src={homeImage}
                                                className="wow fadeInLeft"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray shape-1"></div>
                    <div className="shape1"><img src={require('../../images/shape1.png')} alt="img"/></div>
                    <div className="shape3"><img src={require('../../images/shape3.png')} alt="img"/></div>
                    <div className="shape6"><img src={require('../../images/shape6.png')} alt="img"/></div>
                    <div className="shape8 rotateme"><img src={require('../../images/shape8.svg')} alt="shape"/></div>
                    <div className="shape9"><img src={require('../../images/shape9.svg')} alt="shape"/></div>
                    <div className="shape10"><img src={require('../../images/shape10.svg')} alt="shape"/></div>


                    <div className="bubble-animate">
                        <div className="circle small square1"></div>
                        <div className="circle small square2"></div>
                        <div className="circle small square3"></div>
                        <div className="circle small square5"></div>
                        <div className="circle medium square1"></div>
                        <div className="circle medium square3"></div>
                        <div className="circle medium square4"></div>
                        <div className="circle medium square5"></div>
                        <div className="circle large square1"></div>
                        <div className="circle large square2"></div>
                        <div className="circle large square4"></div>
                    </div>
                </div>
                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='szuchBiLrEM'
                    onClose={() => this.setState({isOpen: false})}
                />
            </React.Fragment>
        );
    }
}

export default Banner;

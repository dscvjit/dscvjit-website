import React, {Component} from 'react';
import Link from 'next/link';
import 'react-image-lightbox/style.css';
import dynamic from 'next/dynamic';
import dscLogoProjectImage from "../../images/dsc-logo-project.png"

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    autoplay: false,
    nav: true,
    loop: true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 4,
        }
    }
}


class RecentProjects extends Component {

    state = {
        display: false,
        photoIndex: 0,
        isOpenImage: false,
    }

    componentDidMount() {
        this.setState({display: true})
    }

    render() {
        return (
            <React.Fragment>
                <section className="project-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Recent Projects</h2>
                            <div className="bar"></div>
                            <p>Catchy sub content for the recent projects - These are the different projects for
                                developed</p>
                        </div>
                    </div>

                    <div className="row m-0">
                        {this.state.display ? <OwlCarousel
                            className="project-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12">
                                <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                    <div className="project-image">
                                        <img src={dscLogoProjectImage} alt="work"/>
                                    </div>

                                    <div className="project-content">
                                        <span>Category</span>
                                        <h3>
                                            <Link href="#">
                                                <a>Project 1</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                    <div className="project-image">
                                        <img src={dscLogoProjectImage} alt="work"/>
                                    </div>

                                    <div className="project-content">
                                        <span>Category</span>
                                        <h3>
                                            <Link href="#">
                                                <a>Project 2</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>

                                <div className="project-image">
                                        <img src={dscLogoProjectImage} alt="work"/>
                                    </div>

                                    <div className="project-content">
                                        <span>Category</span>
                                        <h3>
                                            <Link href="#">
                                                <a>Project 3</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/*{isOpenImage && (*/}
                            {/*    <Lightbox*/}
                            {/*        mainSrc={images[photoIndex]}*/}
                            {/*        nextSrc={images[(photoIndex + 1) % images.length]}*/}
                            {/*        prevSrc={images[(photoIndex + images.length - 1) % images.length]}*/}
                            {/*        onCloseRequest={() => this.setState({ isOpenImage: false })}*/}
                            {/*        onMovePrevRequest={() =>*/}
                            {/*        this.setState({*/}
                            {/*            photoIndex: (photoIndex + images.length - 1) % images.length,*/}
                            {/*        })*/}
                            {/*        }*/}
                            {/*        onMoveNextRequest={() =>*/}
                            {/*            this.setState({*/}
                            {/*                photoIndex: (photoIndex + 1) % images.length,*/}
                            {/*            })*/}
                            {/*        }*/}
                            {/*    />*/}
                            {/*)}*/}

                            <div className="col-lg-12">
                                <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                    <div className="project-image">
                                        <img src={dscLogoProjectImage} alt="work"/>
                                    </div>
                                    <div className="project-content">
                                        <span>Category</span>
                                        <h3>
                                            <Link href="#">
                                                <a>Project 4</a>
                                            </Link>
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                    <div className="project-image">
                                        <img src={dscLogoProjectImage} alt="work"/>

                                        <Link href="#">
                                            <a
                                                className="popup-btn"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    this.setState({isOpenImage: true})
                                                }}
                                            >
                                                <i className="icofont-plus"></i>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="project-content">
                                        <span>Category</span>
                                        <h3>
                                            <Link href="#">
                                                <a>Project 5</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                    <div className="project-image">
                                        <img src={dscLogoProjectImage} alt="work"/>

                                        <Link href="#">
                                            <a
                                                className="popup-btn"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    this.setState({isOpenImage: true})
                                                }}
                                            >
                                                <i className="icofont-plus"></i>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="project-content">
                                        <span>Category</span>
                                        <h3>
                                            <Link href="#">
                                                <a>Project 6</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                    <canvas id="canvas"></canvas>
                </section>
            </React.Fragment>
        );
    }
}

export default RecentProjects;

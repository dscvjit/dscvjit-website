import React, {Component} from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-image-lightbox/style.css';
import dscLogoProjectImage from "../../images/dsc-logo-project.png"

const images = [
    dscLogoProjectImage, dscLogoProjectImage, dscLogoProjectImage, dscLogoProjectImage
]

class DetailsContent extends Component {

    state = {
        isOpen: false,
        photoIndex: 0,
        isOpenImage: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        const {photoIndex, isOpenImage} = this.state;
        return (
            <section className="project-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
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
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
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
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
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
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
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
                        </div>

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({isOpenImage: false})}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length,
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length,
                                    })
                                }
                            />
                        )}

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>Project Name</h3>
                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie
                                    eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit
                                    praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad,
                                    ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit
                                    dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit
                                    causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui,
                                    munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem
                                    doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere
                                    oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie
                                    eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit
                                    praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad,
                                    ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit
                                    dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit
                                    causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui,
                                    munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem
                                    doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere
                                    oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Developed By</h4>
                                        <p>Ashfaq Nisar</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Dashboard</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <p>19-04-2020</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <Link href="#">
                                            <a className="btn btn-primary">Demo</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;

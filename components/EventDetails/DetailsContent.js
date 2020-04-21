import React from 'react';
import Link from 'next/link';
import dscLogoProjectImage from "../../images/dsc-logo-project.png"

// const images = [
//     dscLogoProjectImage, dscLogoProjectImage, dscLogoProjectImage, dscLogoProjectImage
// ]

const DetailsContent = ({event}) => {
    return (
        <section className="project-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="project-details-image">
                            <img src={event.image} alt="work"/>
                        </div>
                    </div>

                    {/*<div className="col-lg-6 col-md-6">*/}
                    {/*    <div className="project-details-image">*/}
                    {/*        <img src={dscLogoProjectImage} alt="work"/>*/}

                    {/*        <Link href="#">*/}
                    {/*            <a*/}
                    {/*                className="popup-btn"*/}
                    {/*                onClick={e => {*/}
                    {/*                    e.preventDefault();*/}
                    {/*                    this.setState({isOpenImage: true})*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                <i className="icofont-plus"></i>*/}
                    {/*            </a>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-6 col-md-6">*/}
                    {/*    <div className="project-details-image">*/}
                    {/*        <img src={dscLogoProjectImage} alt="work"/>*/}

                    {/*        <Link href="#">*/}
                    {/*            <a*/}
                    {/*                className="popup-btn"*/}
                    {/*                onClick={e => {*/}
                    {/*                    e.preventDefault();*/}
                    {/*                    this.setState({isOpenImage: true})*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                <i className="icofont-plus"></i>*/}
                    {/*            </a>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-6 col-md-6">*/}
                    {/*    <div className="project-details-image">*/}
                    {/*        <img src={dscLogoProjectImage} alt="work"/>*/}

                    {/*        <Link href="#">*/}
                    {/*            <a*/}
                    {/*                className="popup-btn"*/}
                    {/*                onClick={e => {*/}
                    {/*                    e.preventDefault();*/}
                    {/*                    this.setState({isOpenImage: true})*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                <i className="icofont-plus"></i>*/}
                    {/*            </a>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*{isOpenImage && (
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
                        )}*/}

                    <div className="col-lg-12 col-md-12">
                        <div className="project-details-desc">
                            <h3>{event.name}</h3>
                            <p>{event.des}</p>

                            <p>The pants raids with adventure, drink the fortress before it hobbles. Ho-ho-ho! courage
                                of booty.
                                Yuck, yer not blowing me without a madness! Proud, rainy tobaccos roughly raid a shiny,
                                evil bung hole.
                                The breeze views with faith, blow the lighthouse before it laughs. Ho-ho-ho! yellow
                                fever of strength.
                                Jolly roger, never raid a plank. Misty, real suns oppressively burn a dark, cloudy
                                cannibal.
                                The swashbuckling sailor fiery commands the skiff. Scurvy, weird winds swiftly view a
                                heavy-hearted, coal-black comrade.
                                Wenchs scream from desolations like sunny tunas. Big, swashbuckling parrots greedily
                                hail a scurvy, salty woodchuck.
                                Adventure, booty, and strength. The sea fears with booty, ransack the bikini atoll
                                before it hobbles.
                                The fish desires with endurance, love the reef before it waves.
                                the swabbie hauls with fight, hail the lighthouse before it screams.</p>

                            <div className="project-details-information">
                                <div className="single-info-box">
                                    <h4>Conducted By</h4>
                                    <p>DSC Web Team</p>
                                </div>

                                <div className="single-info-box">
                                    <h4>Category</h4>
                                    <p>Workshop</p>
                                </div>

                                <div className="single-info-box">
                                    <h4>Conducted On</h4>
                                    <p>19-04-2020</p>
                                </div>

                                <div className="single-info-box">
                                    <h4>Attendees</h4>
                                    <p>70</p>
                                </div>


                                <div className="single-info-box">
                                    <Link href="#">
                                        <a className="btn btn-primary">Get Images</a>
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

export default DetailsContent;

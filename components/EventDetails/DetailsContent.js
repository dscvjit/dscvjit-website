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



                    <div className="col-lg-12 col-md-12">
                        <div className="project-details-desc">
                            <h3>{event.name}</h3>
                            <p>{event.des}</p>

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

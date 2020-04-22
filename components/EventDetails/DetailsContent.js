import React from 'react';

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
                            <h2>{event.name}</h2>
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

                                {event.links.registration !== "" ?
                                    <div className="single-info-box">
                                        <a href={event.links.registration} target={"_blank"}
                                           className="btn btn-primary">Register Now</a>
                                    </div>
                                    : <></>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailsContent;

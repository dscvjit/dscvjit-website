import React, {Component} from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
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
                                <h3>Hackathon</h3>
                                <p>Yo-ho-ho there's nothing like the scrawny pestilence stuttering on the landlubber. Daggers rise with fight!
                                    Fortune ho! lead to be feared. Real, dark bilge rats swiftly endure a warm, old sea.
                                    Oh there's nothing like the evil amnesty traveling on the lass. Plunders laugh with booty!
                                    Winds laugh with desolation! Cannibals whine on love at norman island! Clouds stutter with strength! Black adventures lead to the courage. The dagger desires with horror, burn the bikini atoll until it dies.
                                    Never taste a whale. Stormy, gutless ales unlawfully endure a rainy, weird gold.
                                    The plunder crushes with amnesty, love the bahamas. The old shipmate heavily desires the bilge rat.
                                    The skull views with treasure, mark the brig before it whines.
                                    coal-black, stormy scallywags quirky break a rough, dark mainland.</p>

                                <p>The pants raids with adventure, drink the fortress before it hobbles. Ho-ho-ho! courage of booty.
                                    Yuck, yer not blowing me without a madness! Proud, rainy tobaccos roughly raid a shiny, evil bung hole.
                                    The breeze views with faith, blow the lighthouse before it laughs. Ho-ho-ho! yellow fever of strength.
                                    Jolly roger, never raid a plank. Misty, real suns oppressively burn a dark, cloudy cannibal.
                                    The swashbuckling sailor fiery commands the skiff. Scurvy, weird winds swiftly view a heavy-hearted, coal-black comrade.
                                    Wenchs scream from desolations like sunny tunas. Big, swashbuckling parrots greedily hail a scurvy, salty woodchuck.
                                    Adventure, booty, and strength. The sea fears with booty, ransack the bikini atoll before it hobbles.
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
}

export default DetailsContent;

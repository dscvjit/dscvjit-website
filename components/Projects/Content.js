import React, {Component} from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import dscLogoProject from '../../images/dsc-logo-project.png'

class Content extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        return (
            <section className="project-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 1</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 2</a></Link></h3>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 3</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 4</a></Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 5</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 6</a></Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 7</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 8</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Category</span>
                                    <h3><Link href="#"><a>Project 9</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">

                                        <li className="page-item"><a className="page-link" href="#"><i
                                            className="icofont-double-left"/></a></li>

                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>

                                        <li className="page-item"><a className="page-link" href="#">2</a></li>

                                        <li className="page-item"><a className="page-link" href="#">3</a></li>

                                        <li className="page-item"><a className="page-link" href="#"><i
                                            className="icofont-double-right"/></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;

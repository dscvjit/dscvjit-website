import React, {Component} from 'react';
import Link from 'next/link';
import dscLogoProject from '../../images/dsc-logo-project.png'

class Content extends Component {
    render() {
        return (
            <section className="project-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 1</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 2</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 3</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 4</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 5</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 6</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 7</a></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-project" style={{cursor: "pointer"}} onClick={()=>{console.log("opened the project1")}}>
                                <div className="project-image">
                                    <img src={dscLogoProject} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At 5 th August</span>
                                    <h3><Link href="#"><a>Event 8</a></Link></h3>
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

import React from 'react';
import Link from 'next/link';

const Content = ({events}) => {
    return (
        <section className="project-area ptb-100">
            <div className="container">
                <div className="row">
                    {events.map(event =>(
                        <div className="col-lg-6 col-md-6" key={event.id}>
                            <div className="single-project" style={{cursor: "pointer"}} onClick={() => {
                                console.log(`Clicked on ${event.id}`)
                            }}>
                                <div className="project-image">
                                    <img src={event.defaultImage} alt="work"/>
                                </div>

                                <div className="project-content">
                                    <span>Conducted At {event.createdAt}</span>
                                    <h3><Link href={`/events/${event.id}`}><a>{event.name}</a></Link></h3>
                                </div>
                            </div>
                        </div>
                    ))}




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

export default Content;

import React, {Component} from 'react';

class IdeaForm extends Component {
    render() {
        return (
            <section className="idea-form ptb-100 bg-gray">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-text">
                                <h3>Have an Awesome Idea, Lets BrainStorm</h3>
                                <div className={"bar"}/>
                                <p>The points/rules for the brainstorming : </p>
                                <ul>
                                    <li>If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean
                                        avoiding Javascript.
                                    </li>
                                    <li>For businesses which sell products online and and improve their product listings
                                        in the search results.
                                    </li>
                                    <li>If you’re investing in a new website it’s important to ensure it’s built to
                                        succeed in the search results too.
                                    </li>
                                    <li>If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean
                                        avoiding Javascript.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-form">
                                {/*<h3></h3>*/}
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Name*" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" placeholder="Email*" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" placeholder="Branch*" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" placeholder="Year*" className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" placeholder="Idea*" className="form-control"/>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit Idea</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <svg className="idea-form-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff"/>
                </svg>
            </section>
        );
    }
}

export default IdeaForm;

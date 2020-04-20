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
                                    <li>First Rule
                                    </li>
                                    <li>Second Rule
                                    </li>
                                    <li>Third Rule
                                    </li>
                                    <li>Fourth Rule
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="analysis-form">
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

import React, { Component } from 'react';
import Link from 'next/link';
import Banner from '../components/Error/Banner';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <Banner />

                <section className="error-area ptb-50">
                    <div className="container">
                        <div className="notfound">
                            <div className="notfound-404"></div>
                            <h2>{this.props.statusCode}</h2>
                            <span>Oops!! Page not Found</span>
                            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                            <Link href="/">
                                <a className="btn btn-primary">Back To Home</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Error;

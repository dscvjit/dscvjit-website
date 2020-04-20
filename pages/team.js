import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Team/Banner';
import Members from '../components/Team/Members';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Members />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;

import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Projects/Banner';
import Content from '../components/Projects/Content';

class Projects extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <Content />
                <Footer />
            </>
        );
    }
}

export default Projects;

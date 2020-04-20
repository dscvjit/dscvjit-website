import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Events/Banner';
import Content from '../components/Events/Content';

class Events extends Component {
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

export default Events;

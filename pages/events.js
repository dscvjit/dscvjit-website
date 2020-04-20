import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Events/Banner';
import Content from '../components/Events/Content';
import axios from "../config/axios";

class Events extends Component {
    static async getInitialProps(ctx) {
        const res = await axios(
            {
                url: '/events',
                method: 'GET'
            }
        )
        const eventsArray = await res.data
        return {events: eventsArray}
    }
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <Content events={this.props.events} />
                <Footer />
            </>
        );
    }
}

export default Events;

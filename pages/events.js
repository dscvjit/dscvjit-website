import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Events/Banner';
import Content from '../components/Events/Content';
import {getAllEvents} from "../service/service"



class Events extends Component {
    static async getInitialProps(ctx) {
        const res = await getAllEvents();
        return {events: res.data}
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

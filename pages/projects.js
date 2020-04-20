import React from 'react';
import Navbar from "../components/Layouts/Navbar";
import Footer from '../components/Layouts/Footer'
import Banner from "../components/Projects/Banner";
import Content from "../components/Projects/Content";

import axios from '../config/axios'

class Projects extends React.Component {
    static async getInitialProps(ctx) {
        const res = await axios(
            {
                url: '/projects',
                method: 'GET'
            }
        )
        const projectsArray = await res.data
        return {projects: projectsArray}
    }

    render() {
        return (
            <>
                <Navbar/>
                <Banner/>
                <Content projects={this.props.projects}/>
                <Footer/>
            </>
        );
    }
}

export default Projects


import React from 'react';
import Navbar from "../components/Layouts/Navbar";
import Footer from '../components/Layouts/Footer'
import Banner from "../components/Projects/Banner";
import Content from "../components/Projects/Content";

import {getAllProjects} from '../service/service'

class Projects extends React.Component {
    static async getInitialProps(ctx) {
        const res = await getAllProjects()
        return {projects: res.data}
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


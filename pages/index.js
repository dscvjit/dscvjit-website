import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Home/Banner';
import Technologies from '../components/Home/Technologies';
import Overview from '../components/Home/Overview';
import IdeaForm from '../components/Home/IdeaForm';
import RecentProjects from '../components/Home/RecentProjects';
import FAQ from '../components/Home/FAQ';
import {getAllProjects} from "../service/service";


class Index extends React.Component {
    static async getInitialProps(ctx) {
        const res = await getAllProjects();
        return {projects: res.data}
    }
    render() {
        return (
            <>
                <Navbar/>
                <Banner/>
                <Overview/>
                <Technologies/>
                <RecentProjects projects={this.props.projects}/>
                <IdeaForm/>
                <FAQ/>
                <Footer/>
            </>
        );
    }
}

export default Index;
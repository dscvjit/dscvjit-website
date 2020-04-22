import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Home/Banner';
import Technologies from '../components/Home/Technologies';
import Overview from '../components/Home/Overview';
import IdeaForm from '../components/Home/IdeaForm';
import RecentProjects from '../components/Home/RecentProjects';
import FAQ from '../components/Home/FAQ';
import NoSSR from 'react-no-ssr';

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Overview />
        <Technologies />
        <NoSSR>
          <RecentProjects />
        </NoSSR>
        <IdeaForm />
        <FAQ />
        <Footer />
      </>
    );
  }
}

export default Index;

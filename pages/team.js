import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Team/Banner';
import Members from '../components/Team/Members';
import { getAllTeam } from '../service/service';
import NoSSR from 'react-no-ssr';

class Team extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <NoSSR>
          <Members />
        </NoSSR>
        <Footer />
      </>
    );
  }
}

export default Team;

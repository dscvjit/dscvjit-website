import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Team/Banner';
import Members from '../components/Team/Members';
import { getAllTeam } from '../service/service';
import NoSSR from 'react-no-ssr'

class Team extends React.Component {
  static async getInitialProps(ctx) {
    const res = await getAllTeam();
    return { members: res.data };
  }

  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <NoSSR>
          <Members members={this.props.members} />
        </NoSSR>
        <Footer />
      </>
    );
  }
}

export default Team;

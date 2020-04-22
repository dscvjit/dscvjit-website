import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Team/Banner';
import Members from '../components/Team/Members';
import { getAllTeam } from '../service/service';

const Team = ({ members }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Members members={members} />
      <Footer />
    </>
  );
};
Team.getInitialProps = async (ctx) => {
  const res = await getAllTeam();
  return { members: res.data };
};

export default Team;

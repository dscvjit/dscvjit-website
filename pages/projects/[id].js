import React from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import DetailsContent from '../../components/ProjectDetails/DetailsContent';
import { withRouter } from 'next/router';
import { getSpecificProject } from '../../service/service';
import Banner from '../../components/ProjectDetails/Banner';

const ProjectDetails = ({ project }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <DetailsContent project={project} />
      <Footer />
    </>
  );
};

ProjectDetails.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await getSpecificProject(id);
  return { project: res.data };
};
export default withRouter(ProjectDetails);

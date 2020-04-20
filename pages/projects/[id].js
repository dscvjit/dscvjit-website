import React from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import Banner from '../../components/ProjectDetails/Banner';
import DetailsContent from '../../components/ProjectDetails/DetailsContent';
import {useRouter} from 'next/router'

const ProjectDetails = () => {

    const router = useRouter();
    const {id} = router.query

    return (
        <>
            <Navbar/>
            <Banner id={id}/>
            <DetailsContent/>

            <Footer/>
        </>
    );

}

export default ProjectDetails;

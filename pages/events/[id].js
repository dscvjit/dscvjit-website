import React from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import Banner from '../../components/EventDetails/Banner';
import DetailsContent from '../../components/EventDetails/DetailsContent';
import {useRouter} from 'next/router'

const EventDetails = () => {

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

export default EventDetails;

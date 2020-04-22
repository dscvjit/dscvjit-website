import React from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import DetailsContent from '../../components/EventDetails/DetailsContent';
import {getSpecificEvent} from "../../service/service";
import {withRouter} from "next/router";

const EventDetails = ({event}) => {
    return (
        <>
            <Navbar/>
            <DetailsContent event={event}/>
            <Footer/>
        </>
    )
}

EventDetails.getInitialProps = async ctx => {
    const {id} = ctx.query
    const res = await getSpecificEvent(id);
    return {event: res.data}
}

export default withRouter(EventDetails);

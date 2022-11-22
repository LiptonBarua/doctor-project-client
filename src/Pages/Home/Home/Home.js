import React from 'react';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Form from '../Form/Form';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Service/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <Exceptional></Exceptional>
          <MakeAppointment></MakeAppointment>
          <Testimonial></Testimonial>
          <Form></Form>
        </div>
    );
};

export default Home;
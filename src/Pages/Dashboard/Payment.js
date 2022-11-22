import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useNavigation } from 'react-day-picker';
import { useNavigation } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
import Loading from '../Shereit/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData();
    const {tritment, price, appointmentDate, slot} = booking;
    const navigation = useNavigation();
    console.log(navigation.state)
  
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

    if(navigation.state==='loading'){
        return <Loading></Loading>
    }
    console.log(stripePromise)
    return (
        <div>
            <h1 className='text-3xl'>Payment for {tritment}</h1>
            <p>Please pay <strong>{price}</strong> for your appointemet on {appointmentDate} at {slot}</p>
            <div className='w-96 my-10'>
            <Elements stripe={stripePromise}>
             <CheckoutForm booking={booking}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;
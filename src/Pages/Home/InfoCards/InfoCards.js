import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData =[
        {
        id: 1,
          name: 'Opening Hours',
          description: 'Lorem Ipsum is simply dummy text of the pri',
          icon: clock,
          bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
        id: 2,
          name: 'Visit our location',
          description: 'Brooklyn, NY 10036, United States',
          icon: marker,
          bgClass: 'bg-rose-700'
        },
        {
        id: 3,
          name: 'Opening Hours',
          description: '+000 123 456789',
          icon: phone,
          bgClass: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        },
]
    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white'>
            {
                cardData.map(cardData=><InfoCard key={cardData.id} cardData={cardData}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
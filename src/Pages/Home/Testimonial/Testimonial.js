import React from 'react';
import people from '../../../assets/images/people1.png'
import Testimonials from './Testimonials';
import icon from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    const testimonialData =[
        {
            id: 1,
            decription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            title: 'Winson Herry',
            img: people,
            authTitle: 'California'
        },
        {
            id: 2,
            decription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            title: 'Winson Herry',
            img: people,
            authTitle: 'California'
        },
        {
            id: 3,
            decription: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            title: 'Winson Herry',
            img: people,
            authTitle: 'California'
        }
    ]
    return (
        <div className='my-16'>
            <div className='flex justify-between'>
              <div>
              <h3 className='font-bold text-xl text-primary'>Testimonial</h3>
               <h1 className='text-4xl'>What Our Patients Says</h1>
              </div>
              <div>
              <figure><img className='w-24 md:w-48' src={icon} alt="Movie" /></figure>
              </div>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
               {
                testimonialData.map(testimonial=><Testimonials key={testimonial.id} testimonial={testimonial}></Testimonials>)
               }
            </div>
        </div>
    );
};

export default Testimonial;
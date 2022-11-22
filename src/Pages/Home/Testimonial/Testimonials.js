import React from 'react';

const Testimonials = ({ testimonial }) => {
  const { img, decription, title, authTitle } = testimonial;
  return (
    <div className="card bg-neutral text-neutral-content">
      <div className="card-body items-center ">
        <p className='text-justify'>{decription}</p>

        <div className="flex items-center mt-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <figure><img className='w-16' src={img} alt="Movie" /></figure>
            </div>
          </div>

          <div className=' ml-6'>
            <h2 className='text-xl'>{title}</h2>
            <h4>{authTitle}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
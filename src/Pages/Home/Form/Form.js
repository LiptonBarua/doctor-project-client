import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const Form = () => {
    return (
        <section style={
            {
                background: `url(${appointment})`
            }
        }>
        <div className='grid justify-center py-16 overflow-hidden'>
            <div className='text-center pb-10'>
              <h1 className='text-2xl text-primary'>Contact Us</h1>
              <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <div>
            <form>
            <input type="text"  className='bg-white rounded-lg pl-16 md:pl-6 w-[450px] h-[48px] mb-4'name="subject" id="" placeholder='Subject' /><br/>
            <input type="text"  className='bg-white rounded-lg md:pl-6 w-[450px] h-[48px]'name="subject" id="" placeholder='Subject' /><br/>
            <textarea className='bg-white rounded-lg pl-6 w-[450px] h-[136px] my-4' placeholder='Your message'></textarea><br/>
            <div className='text-center'>
            <button className='btn btn-primary w-[120px]' type="submit">Submit</button>
            </div>
        </form>
            </div>
        </div>
        </section>
    );
};

export default Form;
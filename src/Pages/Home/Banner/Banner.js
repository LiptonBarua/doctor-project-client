import React from 'react';
import chair from '../../../assets/images/chair.png'
import banner from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <section className="hero my-6 py-10" style={
            {
                background: `url(${banner})`
            }
        }>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl w-[107%] md:w-1/2" alt='' />
                <div>
                    <h1 className="text-3xl md:text-6xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
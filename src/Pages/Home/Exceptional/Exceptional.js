import React from 'react';
import img from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-8 grid justify-between">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl w-[107%] md:w-1/2" alt='' />
                <div className='pt-6 md:pl-12'>
                    <h1 className="text-3xl md:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;
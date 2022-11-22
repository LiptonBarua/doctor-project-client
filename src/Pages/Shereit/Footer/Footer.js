import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/footer.png'

const Footer = () => {
    return (
     <div>
             <div className="hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="footer p-10 md:flex justify-around" >
        <footer className="footer footer-center  text-base-content rounded">
 
        <footer className="footer p-4 text-neutral-content">
  <div>
    <span className="footer-title">SERVICES</span> 
    <Link to='/' className="link link-hover">Emergency Checkup</Link>
    <Link to='/' className="link link-hover">Monthly Checkup</Link>
    <Link to='/' className="link link-hover">Weekly Checkup</Link>
    <Link to='/' className="link link-hover">Deep Checkup</Link>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
    <Link to='/' className="link link-hover">Cavity Filling</Link>
    <Link to='/' className="link link-hover">Teath Whitening</Link>
  </div> 
  <div>
    <span className="footer-title">OUR ADDRESS</span> 
    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
  </div>
</footer>
  <div>
    <p>Copyright 2022 All Rights Reserved</p>
  </div>
</footer>

</div>
<div>
    
</div>
          </div>

     </div>
    );
};

export default Footer;




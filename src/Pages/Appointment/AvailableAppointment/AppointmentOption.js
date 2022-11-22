import React from 'react';

const AppointmentOption = ({appointmentOption, setTritment}) => {
    const{name, price, slots} =appointmentOption;
    return (
        <div className="card  bg-base-100 shadow-xl">

  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl text-primary font-bold">{name}</h2>
    <p>{slots.length>0? slots[0]: 'Try Another Day'}</p>
    <p>{slots.length} {slots.length>1 ? 'SPACES': 'SPACE'} AVAILABLE</p>
    <p><small>Price: ${price}</small></p>
    <div className="card-actions">
      <label onClick={()=>setTritment(appointmentOption)} disabled={slots===0} htmlFor="book-modal" className="btn btn-primary text-white">BOOK APPOINTMENT</label>
    </div>
  </div>
</div>
      
    );
};

export default AppointmentOption;
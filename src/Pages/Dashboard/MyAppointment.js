import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyAppointment = () => {
    const{user} = useContext(AuthContext);

    const url = `https://doctor-portal-server-one.vercel.app/booking?email=${user?.name}`;
    const {data:booking=[]} =useQuery({
       queryKey:['booking', user?.email],
       queryFn: async()=>{
        const res= await fetch(url,{
          headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
       }
    })
    return (
        <div>
            <h1 className='text-3xl mb-5 text-orange-500 font-bold'>My Appointment</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Tritment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    
    {
        booking.map((book,i)=><tr key={book._id}>
            <th>{i+1}</th>
            <td>{book.patient}</td>
            <td>{book.tritment}</td>
            <td>{book.appointmentDate}</td>
            <td>{book.slot}</td>
            <td>{
            book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
            }
            {
              book.price && book.paid && <span className='text-green-500'>Paid</span>
            }
            </td>
          </tr>)
    }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;
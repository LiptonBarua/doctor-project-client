import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookModal = ({tritment, selectedDay, setTritment, refetch}) => {
    const {user} = useContext(AuthContext)
    const {name:tritmentName, slots, price} = tritment;
    const date = format(selectedDay, 'PP');

    const handleBook=event=>{
        event.preventDefault()
        const form = event.target;
        const slot =form.slot.value;
        const name=form.name.value;
        const phone=form.phone.value;
        const email = form.email.value;
       
        const booking ={
            appointmentDate: date,
            tritment: tritmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        
        fetch('https://doctor-portal-server-one.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(booking)
           if(data.acknowledged){
            setTritment(null);
            toast.success('Booking confirmed')
            refetch();
           }
           else{
            toast.error(data.message)
           }
        })

    
    }
    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{tritmentName}</h3>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-1 mt-10'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" /><br />
                        <select name='slot' className="select select-bordered w-full">
                          {
                            slots.map((slot, i)=><option key={i} value={slot}>{slot}</option>)
                          }
                           
                        </select><br/>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" /><br />
                        <input type="number" name='phone' placeholder="Phone Name" className="input input-bordered w-full" /><br />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" /><br />
                        <button type="submit" value='submit' className='w-full btn btn-accent'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;
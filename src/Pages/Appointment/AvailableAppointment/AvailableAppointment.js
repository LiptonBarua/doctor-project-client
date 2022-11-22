import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useState } from 'react';
import Loading from '../../Shereit/Loading/Loading';
import BookModal from '../BookModal/BookModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDay}) => {
    // const[appointmentOption, setAppointment] =useState([]);
    const [tritment, setTritment] =useState(null);
    const date = format(selectedDay, 'PP')
    const {data:appointmentOption=[], refetch, isLoading} = useQuery({
        queryKey: ['apponintmentOption', date],
        queryFn: ()=>fetch(`https://doctor-portal-server-one.vercel.app/apponintmentOption?date=${date}`)
        .then(res=>res.json())
    })
    // useEffect(()=>{
    //     fetch('https://doctor-portal-server-one.vercel.app/apponintmentOption')
    //     .then(res=>res.json())
    //     .then(data=>setAppointment(data))
    // },[])
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='text-center'>
             <div>
             <p className='font-bold text-primary'>Available Appointments on {format(selectedDay, 'PP')} .</p>
             </div>
             <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-28'>
                 {
                    appointmentOption.map(appointmentOption=><AppointmentOption 
                        key={appointmentOption._id} 
                        appointmentOption={appointmentOption}
                        setTritment={setTritment}>
                        </AppointmentOption>)
                 }
             </div>
             {
                tritment && <BookModal tritment={tritment} selectedDay={selectedDay} setTritment={setTritment} refetch={refetch}></BookModal>
             }
        </div>
    );
};

export default AvailableAppointment;
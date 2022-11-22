import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ComfirmationModal from '../Shereit/ComfirmationModal/ComfirmationModal';
import Loading from '../Shereit/Loading/Loading';

const ManageDoctors = () => {
    const[deleteDoctor, setDeleteDoctor] = useState(null);

    const closeModel=()=>{
        setDeleteDoctor(null)
    }
   
    
    const{data:doctors, isLoading, refetch} =useQuery({
        queryKey: ['doctors'],
        queryFn: async()=>{
            try{
            const res =await fetch('https://doctor-portal-server-one.vercel.app/doctors',{
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
            })
            const data= await res.json()
            return data;
            }
            catch(error){
            
            }
        }

    });

    const handleDeleteDoctor=doctor=>{
        fetch(`https://doctor-portal-server-one.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast.success(`Doctor ${doctor.name} deleted Successfully`)
                refetch()
            }
            // console.log(data)
         
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
           <h1 className='text-3xl mb-5 text-orange-700 font-bold'>Manage Doctors: {doctors.length}</h1>
         <div className="">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        doctors?.map((doctor, i)=> <tr key={doctor._id}>
            <th>{i+1}</th>
            <td>
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </td>
            <td>{doctor.name}</td>
            <td>{doctor.email}</td>
            <td>{doctor.specialty}</td>
            <td>
            <label onClick={()=>setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                
                </td>
          </tr>)
     }
    </tbody>
  </table>
</div>
{deleteDoctor && <ComfirmationModal
     title={`Are you sure you want to delete?`} 
     message={`If you delete ${deleteDoctor.name}. It cannot be undone.`} 
     closeModel={closeModel}
     successAction ={handleDeleteDoctor}
     modalData= {deleteDoctor}
     successButtonName="Delete"
     >

                    
    </ComfirmationModal>}
        </div>
    );
};

export default ManageDoctors;

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shereit/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()
  
    const {data:specialtes, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async()=>{
           const res= await fetch('https://doctor-portal-server-one.vercel.app/appointmentSpecialty')
           const data = await res.json();
           return data;
        }
    })
    const handleAddDoctor=data=>{

      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const uri = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
      fetch(uri,{
        method: 'POST',
        body: formData
      })
      .then(res=>res.json())
      .then(imgData=>{
       if(imgData.success){
        const doctor ={
            name: data?.name,
            email: data.email,
            specialty: data.specialty,
            image:imgData.data.url
          
        };
        

        fetch('https://doctor-portal-server-one.vercel.app/doctors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                 authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success(`${data?.name} is my successfully`);
            navigate('/dashboard/manageDoctors')
        })
       }
      })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            
            <div>
        <div className='w-96 p-7'>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
              
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input placeholder='Enter Your Name' type="text" {...register("name", {required: 'Name is Required'})} className="input input-bordered w-full max-w-xs"/> 
                    {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input placeholder='Enter Your email' type="email" {...register("email", {required: "Email Address is required"})} 
                    className="input input-bordered w-full max-w-xs"/> 
                    {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
                    {
                       specialtes.map(specialte=> <option key={specialte._id} value={specialte.name}>{specialte.name}</option>)
                    }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {required: 'Name is Required'})} className="input input-bordered w-full max-w-xs"/> 
                    {errors.image && <p role="alert" className='text-red-500'>{errors.image?.message}</p>}
                </div>
                <input className='w-full btn btn-secondary mt-5' value='Add Doctor' type="submit" />
            </form>
          
        </div>
    </div>
        </div>
    );
};

export default AddDoctor;
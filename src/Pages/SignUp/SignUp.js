import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const[signUpError, setSignUpError] =useState('');
    const[createdUserEmaii, setCreatedUserEmail] = useState('')
    const [token] =useToken(createdUserEmaii);

     const navigate = useNavigate();
     if(token){
        navigate('/')
     }
    const handleSignUp=(data)=>{
        setSignUpError('')


        createUser(data.email, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
             toast('user created successfully')
            const userInfo={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                savedUser(data.name, data.email)
                
            })
            .catch((error)=>console.error(error))
           
        })
        .catch(error=>{
            setSignUpError(error.message)
            console.error(error)})
    }

    const savedUser=(name, email)=>{
        const users= {name, email};
        fetch('https://doctor-portal-server-one.vercel.app/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCreatedUserEmail(email)
        })
    }
   
    return (
        <div className='h-[400px] flex justify-center items-center my-16' >
        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {required: 'Name is Required'})} className="input input-bordered w-full max-w-xs"/> 
                    {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {required: "Email Address is required"})} 
                    className="input input-bordered w-full max-w-xs"/> 
                    {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {required: "Password is required", minLength: {value: 6, message: 'password must be 6 character longer'}})} className="input input-bordered w-full max-w-xs"/>  
                    {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                </div>
                <input className='w-full btn btn-secondary' value='SIGN UP' type="submit" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
            <div className='divider'>OR</div>
            {signUpError && <p className='text-red-900'>{signUpError}</p>}
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;
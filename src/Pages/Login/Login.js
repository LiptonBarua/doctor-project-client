import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const{signIn} =useContext(AuthContext);
    const[loginError, setLoginError] =useState('');
    const[loginUserEmail, setLoginUserEmail] =useState('');
    const[token] =useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true})
    }
   
    const {register, handleSubmit, formState: {errors} } = useForm();
   
    const handleLogin =data=>{
        setLoginError('')
        signIn(data.email, data.password)
         .then(result=>{
            const user= result.user;
            console.log(user)
            setLoginUserEmail(data.email)
          
         })
         .catch(error=>{
            console.error('error.message')
            setLoginError(error.message)
        })
    } 
    return (
        <div className='h-[400px] flex justify-center items-center my-10' >
            <div className='w-96 p-7'>
                <h2 className='text-3xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {required: "Email Address is required"})} 
                        className="input input-bordered w-full max-w-xs"/> 
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {required: "Password is required", minLength: {value: 6, message: 'password must be 6 character longer'}})} className="input input-bordered w-full max-w-xs"/>  
                        <label className="label"><span className="label-text">Forgot Password ?</span></label>
                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='w-full btn btn-secondary' value='LOGIN' type="submit" />
                </form>
                <p>New to Doctors Portal? <Link to='/signup' className='text-primary'>Create new account</Link></p>
                <div className='divider'>OR</div>
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
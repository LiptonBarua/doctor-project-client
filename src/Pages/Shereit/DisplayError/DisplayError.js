import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const DisplayError = () => {
    const{logOut} = useContext(AuthContext)
    const error = useRouteError();
    const navigate = useNavigate()
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            navigate('/login')
        })
        .catch(error=>{})
      }
    return (
        <div>
            <p className='text-red-500'>Something went error</p>
            <p className='text-red-500'>{error.statusTaxt || error.message }</p>
            <h4>Place <button onClick={handleLogOut}>Sign Out</button></h4>
        </div>
    );
};

export default DisplayError;
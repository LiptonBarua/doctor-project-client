import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Pages/Shereit/Loading/Loading';

const AdminRouter = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    console.log(isAdminLoading, loading)
    if(loading || isAdminLoading){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }
    return (
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default AdminRouter;
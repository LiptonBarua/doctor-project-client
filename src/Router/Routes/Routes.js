import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shereit/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRouter from "../AdminRouter/AdminRouter";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/signup', element: <SignUp></SignUp>
        },
        {
            path: '/appointment', element: <PrivateRouter><Appointment></Appointment></PrivateRouter>
        },
    
    ]
    
},
{
    path: '/dashboard', element: 
    <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
    errorElement: <DisplayError></DisplayError>,
    children: [
        {
            path: '/dashboard', element: <MyAppointment></MyAppointment>
        },
        {
            path: '/dashboard/allUsers', element: <AdminRouter><AllUsers></AllUsers></AdminRouter>
        },
        {
            path: '/dashboard/addDoctor', element: <AdminRouter><AddDoctor></AddDoctor></AdminRouter>
        },
        {
            path: '/dashboard/manageDoctors', element: <AdminRouter><ManageDoctors></ManageDoctors></AdminRouter>
        },
        // {
        //     path: '/dashboard/payment/:id', 
        //     element: <AdminRouter><Payment></Payment></AdminRouter>,
        //     loader: ({params})=>fetch(`https://doctor-portal-server-one.vercel.app/booking/${params.id}`)
        // }
    ]
}
])
export default router;

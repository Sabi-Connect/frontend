import ClientSignUp from "../pages/SignupPg/clientSignUp";
import Login from "../pages/LoginPg/login";
import Layout from "../component/layout";
import Home from "../pages/Home";
import MyDashboard from "../pages/Dashbord/dashboard/mydash";

import Appoint from "../pages/Dashbord/appoint/appoint";
import BookAppointment from "../pages/Dashbord/appoint/bookApp/bookappt";
import CancelAppointment from "../pages/Dashbord/appoint/cancelApp/cancelApp";
import ViewAllAppointments from "../pages/Dashbord/appoint/viewApp/viewApp";
import UpdateAppointment from "../pages/Dashbord/appoint/updateApp/updateApp";
import WorkerProfiles from "../pages/Dashbord/catigory/imageCategory";
import AppointmentManager from "../pages/Dashbord/appointmanager/appointmentmanager";
import SkilledWorkerSignUp from "../pages/skilledworker/skilled";



export const ROUTE = [
    {
        path:"",
        element: <Layout/>,
        children:[
            {
                path: "",
                element:<Home/>
            }
        ]
    },
    // {
    //     path:"/jobs",
    //     element: <Layout/>,
    //     // children:[
    //     //     {
    //     //         path: "",
    //     //         element:<Jobs/>
    //     //     }
    //     // ]
    // },

    {
        path: "client",
        element:<ClientSignUp/>
    },
    {
        path: "skilWok",
        element:<SkilledWorkerSignUp/>
    },
    {
        path: "login",
        element:<Login/>
    },
    {
        path: "dashboard",
        element: <MyDashboard/>,
    },
    {
        path: "appoint",
        element: <Appoint/>
    },
    {
        path: "book",
        element: <BookAppointment/>
    },
    {
        path: "/cancel",
        element: <CancelAppointment/>
    },
    {
        path: "/view",
        element: <ViewAllAppointments/>
    },
    {
        path: "/update",
        element: <UpdateAppointment/>
    },
    {
        path:"/book/:category",
        element: <WorkerProfiles/>

    },
    {
        path:"/appMan",
        element: <AppointmentManager/>
    }

]



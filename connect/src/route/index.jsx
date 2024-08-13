import SignUp from "../pages/SignupPg/signup";
import Login from "../pages/LoginPg/login";
import Layout from "../component/layout";
import Home from "../pages/Home";
import MyDashboard from "../pages/Dashbord";
import Pages from "../pages";



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
        path: "sign",
        element:<SignUp/>
    },
    {
        path: "login",
        element:<Login/>
    },
    {
        path: "setting",
        element: <Pages/>,
        children: [
            {
                path: "dashboard",
                element: <MyDashboard/>
            }



        ]
    },

]
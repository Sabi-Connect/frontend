import SignUp from "../pages/SignupPg/signup";
import Login from "../pages/LoginPg/login";
import Layout from "../component/layout";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";

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
    {
        path:"/jobs",
        element: <Layout/>,
        children:[
            {
                path: "",
                element:<Jobs/>
            }
        ]
    },
    {
        path: "login",
        element:<Login/>
    },
    {
        path: "sign",
        element:<SignUp/>
    },

]
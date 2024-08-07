import SignUp from "../pages/SignupPg/signup";
import Login from "../pages/LoginPg/login";
import Layout from "../component/layout";
import Home from "../pages/Home";

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
        path: "login",
        element:<Login/>
    },
    {
        path: "sign",
        element:<SignUp/>
    },

]
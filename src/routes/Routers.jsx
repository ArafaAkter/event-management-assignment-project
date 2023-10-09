import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceCart from "../pages/ServiceCart/ServiceCart";

const router = createBrowserRouter([
    {
        path :'/',
        element :<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader : () => fetch('/event.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/Services/:id',
                element:<ServiceCart></ServiceCart>,
                loader:()=>fetch('/event.json')
            }
        ]
    }
])
export default router
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Dashboard from "../../Pages/User/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../privateRoute/privateRoute";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Shop from "../../Pages/Shop/Shop";
import Cart from "../../Pages/Cart/Cart";
import PlaceOrder from "../../Pages/Cart/placeOrder";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/placeorder',
                // element: <PrivateRoute><PlaceOrder></PlaceOrder></PrivateRoute>
                element: <PlaceOrder></PlaceOrder>
            },

        ]
    }, {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>

    },

]);

export default router;
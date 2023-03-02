import CheckoutCancel from "../../Pages/CheckoutCancel/CheckoutCancel";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";
import CheckoutSuccess from "../../Pages/CheckoutSuccess/CheckoutSuccess";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import MenuPage from "../../Pages/MenuPage/MenuPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";


export const routeData = {
    
    public:[
        {
            path:'/',
            element:<HomePage />
        },
        {
            path:'/menu',
            element:<MenuPage />
        },
        {
            path:'/register',
            element:<RegisterPage />
        },
        {
            path:'/login',
            element:<LoginPage />
        },
        {
            path:'/checkout',
            element:<CheckoutPage />
        },
        {
            path:'/checkout/success',
            element:<CheckoutSuccess />
        },
        {
            path:'/checkout/cancel',
            element:<CheckoutCancel />
        }
        
    ],
    private:[
        {
            path:'/dashboard',
            element:<Dashboard />
        }
   
    ]
}
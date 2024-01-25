import React from "react"
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";


const App = () => {
    return (
        <>
        <div>
            <Header />
            <Outlet/>
        </div>
        </>
        
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ]

    },
    

])

const root = createRoot(document.getElementById("root"))

root.render(
<RouterProvider router={router}/>
)
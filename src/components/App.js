import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '../assets/scss/index.scss';
import HeaderBox from './HeaderBox/HeaderBox';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import AboutPage from './AboutPage/AboutPage';
import HomePage from './HomePage/HomePage';
import RestaurantMenu from './RestaurantMenu/RestaurantMenu';
import ShimmerRestaurantMenu from './ShimmerRestaurantMenu/ShimmerRestaurantMenu';
import StatusToggle from './StatusToggle/StatusToggle';

const AppLayout = () => {

    return (
        <div className='app'>
            <HeaderBox/>
            <Outlet/>
            <StatusToggle/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <ShimmerRestaurantMenu/>,
        children : [
            {
                path : '/',
                element : <HomePage />
            },
            {
                path : '/about',
                element : <AboutPage />
            },
            {
                path : '/restaurant/:restId',
                element : <RestaurantMenu />
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
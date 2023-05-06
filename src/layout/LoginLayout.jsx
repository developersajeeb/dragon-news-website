import React from 'react';
import TopNavigation from '../shared/TopNavigation/TopNavigation';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='mx-28 mt-10'>
            <TopNavigation></TopNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;
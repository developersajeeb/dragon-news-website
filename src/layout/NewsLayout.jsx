import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import RightNav from '../shared/RightNav/RightNav';
import Footer from '../shared/Footer/Footer';

const NewsLayout = () => {
    return (
        <>
            <Header></Header>
            <main className='mx-28 mt-10 grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <Outlet></Outlet>
                </section>
                <section className='col-span-3'>
                    <RightNav></RightNav>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default NewsLayout;
import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import RightNav from '../shared/RightNav/RightNav';
import LeftNav from '../shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <main className='mx-28 mt-10 grid grid-cols-12 gap-5'>
                <section className='col-span-3'>
                    <LeftNav></LeftNav>
                </section>
                <section className='col-span-6'>
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

export default Main;
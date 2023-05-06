import React, { useContext } from 'react';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo.png'
import TopNavigation from '../TopNavigation/TopNavigation';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {

    // const { user } = useContext(AuthContext)

    return (
        <header className='mx-28 mt-10'>
            <div className='text-center'>
                <img className='mx-auto' src={logo} alt="" />
                <p className='text-sm my-3'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='flex bg-gray-100 p-3 my-8'>
                <span className='bg-red-500 text-white py-2 px-3'>Latest</span>
                <Marquee loop={80}>
                    New study reveals alarming decline in global biodiversity, highlighting urgent need for conservation efforts to prevent ecological collapse
                </Marquee>
            </div>
            <TopNavigation></TopNavigation>
            {/* <nav className='grid grid-cols-3 items-center'>
                <div></div>
                <ul className='flex justify-center gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/career'>Career</Link>
                </ul>
                <div className='flex gap-3 items-center justify-end'>
                    {
                        user && <div>
                            <img className='w-8 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png" alt="" />
                        </div>
                    }
                    {
                        user ? <Link to='/login'>
                            <button className='py-1 px-6 bg-gray-900 text-white'>Logout</button>
                        </Link>
                        :
                        <Link to='/login'>
                            <button className='py-1 px-6 bg-gray-900 text-white'>Login</button>
                        </Link>
                    }
                </div>
            </nav> */}
        </header>
    );
};

export default Header;
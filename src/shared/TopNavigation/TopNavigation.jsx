import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const TopNavigation = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <nav className='grid grid-cols-3 items-center'>
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
                        <button onClick={handleLogOut} className='py-1 px-6 bg-gray-900 text-white'>Logout</button>
                    </Link>
                        :
                        <Link to='/login'>
                            <button className='py-1 px-6 bg-gray-900 text-white'>Login</button>
                        </Link>
                }
            </div>
        </nav>
    );
};

export default TopNavigation;
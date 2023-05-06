import React, { useContext } from 'react';
import QZone from '../QZone/QZone';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import AdSection from '../AdSection/AdSection';
import { AuthContext } from '../../providers/AuthProviders';

const RightNav = () => {
    const {user} = useContext(AuthContext);

    return (
        <section>
            {
                user ? "" : <div>
                    <h3 className='text-xl font-bold'>Login With</h3>
                    <button className='border-2 rounded-md py-1 mt-4 w-full'>
                        <span className='flex items-center justify-center gap-2'>
                            <img className='w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" />
                            Login With Google
                        </span>
                    </button>
                    <button className='border-2 rounded-md py-1 mt-2 mx-auto w-full'>
                        <span className='flex items-center justify-center gap-2'>
                            <img className='w-5' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                            Login With GitHub
                        </span>
                    </button>
                </div>
            }
            <div>
                <h3 className='text-xl font-bold mt-7'>Find Us On</h3>
                <ul className='mt-5'>
                    <li className='p-4 border rounded-t-md cursor-pointer'>
                        <a href="https://www.facebook.com/developersajeeb.fb"><span className='bg-gray-100 rounded-full p-2'><FaFacebookF className='inline-block w-6 h-4' /></span> <span className='ml-2 font-medium text-gray-600'>Facebook</span></a>
                    </li>
                    <li className='p-4 border cursor-pointer'>
                        <a href="https://twitter.com/developersajeeb"><span className='bg-gray-100 rounded-full p-2'><FaTwitter className='inline-block w-6 h-4' /></span> <span className='ml-2 font-medium text-gray-600'>Twitter</span></a>
                    </li>
                    <li className='p-4 border rounded-b-md cursor-pointer'>
                        <a href="https://www.instagram.com/developersajeeb/"><span className='bg-gray-100 rounded-full p-2'><FaInstagram className='inline-block w-6 h-4' /></span> <span className='ml-2 font-medium text-gray-600'>Instagram</span></a>
                    </li>

                </ul>
            </div>
            <div className='mt-5'>
                <QZone></QZone>
            </div>
            <div className='mt-5'>
                <AdSection></AdSection>
            </div>

        </section>
    );
};

export default RightNav;
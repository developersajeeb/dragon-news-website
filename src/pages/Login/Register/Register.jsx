import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { useState } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

     const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.url.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(photo, name, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error);
        })
     }

     const handleCheckBox = event => {
        setAccepted(event.target.checked);
     }

    return (
        <div className='flex h-screen my-20'>
            <div className='bg-gray-100 p-14 m-auto w-[550px]'>
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                <div className='border my-8'></div>
                <form onSubmit={handleRegister}>
                    <label className='block font-medium mb-3' htmlFor="name">Photo URL</label>
                    <input type="url" name="url" id="url-input" placeholder='Enter photo url' className='text-xs w-full py-4 px-4 rounded-sm mb-4' />
                    <label className='block font-medium mb-3' htmlFor="name">Your Name</label>
                    <input required type="text" name="name" id="text-input" placeholder='Enter your name' className='text-xs w-full py-4 px-4 rounded-sm mb-4' />
                    <label className='block font-medium mb-3' htmlFor="email">Email Address</label>
                    <input required type="email" name="email" id="email-input" placeholder='Enter your email address' className='text-xs w-full py-4 px-4 rounded-sm mb-4' />
                    <label className='block font-medium mb-3' htmlFor="password">Password</label>
                    <input required type="password" name="password" id="password-input" placeholder='Enter your password' className='text-xs w-full py-4 px-4 rounded-sm' />
                    <input onClick={handleCheckBox} type="checkbox" name="checkbox" id="checkbox-input" className='cursor-pointer mt-5'/>
                    <label htmlFor="checkbox"> Accept Trams & Conditions</label>
                    <input disabled={!accepted} className={`block w-full py-3 bg-gray-800 text-white rounded-sm mt-7 cursor-pointer ${!accepted ? 'bg-gray-500 cursor-default' : ''}`} type="submit" value="Login" />
                </form>
                <p className='text-center mt-7'>Already Have An Account ? <Link to='/login'><span className='text-red-500 cursor-pointer'>Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;
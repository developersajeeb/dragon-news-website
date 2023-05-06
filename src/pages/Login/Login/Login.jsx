import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';

    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex h-screen'>
            <div className='bg-gray-100 p-14 m-auto w-[550px]'>
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <div className='border my-8'></div>
                <form onSubmit={handleUser}>
                    <label className='block font-medium mb-3' htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email-input" placeholder='Enter your email address' className='text-xs w-full py-4 px-4 rounded-sm mb-4' />
                    <label className='block font-medium mb-3' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password-input" placeholder='Enter your password' className='text-xs w-full py-4 px-4 rounded-sm' />
                    <input className='block w-full py-3 bg-gray-800 text-white rounded-sm mt-7' type="submit" value="Login" />
                </form>
                <p className='text-center mt-7'>Don't Have An Account ? <Link to='/register'><span className='text-red-500 cursor-pointer'>Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;
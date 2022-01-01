import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Navbar/Nav';

const Login = () => {

    const {signInUsingGoogle} = useAuth()

    const handleGoogleLogin = () => {
        signInUsingGoogle()
    }

    return (
        <div>
            <Nav></Nav>
            <div className='md:my-32 mt-16 mb-24 flex justify-start md:ml-40 lg:ml-80 mx-7'>
                <div>
                    <h5 className='text-base text-yellow-500 font-bold'>LOGIN</h5>
                    <h1 className='text-4xl font-bold mt-2 mb-10'>Login Now</h1>

                    <form className='inline'>
                        <label htmlFor="email" className='font-semibold'>EMAIL ADRESS *</label>
                        <br />
                        <input type="email" name="email" id="email" required placeholder='Email adress e.g jason@gmail.com' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-200 mt-2 mb-5' />
                        <br />
                        <label htmlFor="password" className='font-semibold'>PASSWORD *</label>
                        <br />
                        <input type="password" name="password" id="password" required placeholder='Enter Your Password' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-200 mt-2 ' />
                        <br />

                        <div className='mt-5'>
                            <input type="checkbox" name="" id="" className='bg-yellow-500 cursor-pointer' />
                            <label htmlFor="custom-control-input" className='font-semibold ml-2'>Remember me for the next time</label>
                        </div>

                        <br />


                        <input type="submit" className='bg-yellow-500 p-2 md:px-16 px-8 text-white font-bold hover:bg-yellow-600 mr-3' value="Submit" />

                    </form>
                    <button className='border border-yellow-500 p-1.5 md:px-7 px-5 font-bold hover:bg-yellow-500 hover:text-white md:ml-3' onClick={handleGoogleLogin} >Google Sign In</button>

                    <h6 className='mt-3 font-medium text-gray-700'>Not register yet? <Link to='/register' className='font-bold text-yellow-500 ml-2'>Create an account</Link></h6>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
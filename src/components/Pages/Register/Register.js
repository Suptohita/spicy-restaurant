import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Navbar/Nav';

const Register = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='md:my-32 mt-16 mb-24 flex justify-start md:ml-20 lg:ml-80 mx-7'>
                <div>
                    <h5 className='text-base text-yellow-500 font-bold'>Register</h5>
                    <h1 className='text-5xl font-bold mt-2 mb-10'>Create Account</h1>

                    <form className='inline'>
                        <div className='md:grid grid-cols-2 gap-10'>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="name" className='font-semibold'>Full Name <span className='text-red-500'>*</span></label>
                                <br />
                                <input type="text" name="full name" id="name" required placeholder='Your name' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-200 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="email" className='font-semibold'>Email Adress <span className='text-red-500'>*</span></label>
                                <br />
                                <input type="email" name="email" id="email" required placeholder='Email address e.g.  Json@gmail.com' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2 ' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="phone number" className='font-semibold'>Phone Number <span className='text-red-500'>*</span></label>
                                <br />
                                <input type="tel" name="password" id="phone number" required placeholder='e.g. 43534533' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="country" className='font-semibold'>Country <span className='text-red-500'>*</span></label>
                                <br />
                                <input type="text" name="country" id="country" required placeholder='Select your country' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="password" className='font-semibold'>Password <span className='text-red-500'>*</span> </label>
                                <br />
                                <input type="password" name="password" id="password" required placeholder='Enter Your Password' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                            <div className='mt-5 md:mt-0'>
                                <label htmlFor="password" className='font-semibold'>CONFIRM PASSWORD <span className='text-red-500'>*</span> </label>
                                <br />
                                <input type="password" name="confirm password" id="confirm_password" required placeholder='Retype Your Password' className='focus:outline-none focus:ring-2 focus:ring-yellow-500 p-3 md:w-96 w-72 border border-yellow-300 mt-2' />
                            </div>
                        </div>

                        <input type="submit" className='bg-yellow-500 p-2 mt-10 md:px-16 px-8 text-white font-bold hover:bg-yellow-600 mr-3' value="Submit" />
                    </form>

                        <button className='border border-yellow-500 p-1.5 md:px-7 px-5 font-bold hover:bg-yellow-500 hover:text-white md:ml-3'>Google Sign In</button>

                    <h6 className='mt-3 font-medium text-gray-700'>Already registered? <Link to='/login' className='font-bold text-yellow-500 ml-2'>Please Login</Link></h6>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;
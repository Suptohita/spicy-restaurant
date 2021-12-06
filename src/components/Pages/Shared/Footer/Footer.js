import React from 'react';
import logo from '../Navbar/image/logo-white.svg'

const Footer = () => {
    return (
        <div className='px-10 pt-10 pb-5 bg-black border-t-4 border-yellow-500 text-white text-center'>
            <div className='flex justify-center'>
                <img className='w-40 text-center justify-center' src={logo} alt="" />
            </div>
            <div className='flex justify-center mt-4'>
                <h6 className='hover:text-yellow-500 font-bold mx-2 text-gray-500'>Home</h6>
                <h6 className='hover:text-yellow-500 font-bold mx-2 text-gray-500'>About</h6>
                <h6 className='hover:text-yellow-500 font-bold mx-2 text-gray-500'>Menu</h6>
                <h6 className='hover:text-yellow-500 font-bold mx-2 text-gray-500'>Contact</h6>
                <h6 className='hover:text-yellow-500 font-bold mx-2 text-gray-500'>Typography</h6>
            </div>
            <p className='font-semibold mt-4'>Copyright ©️ 2021 Spicy-Restaurant</p>
        </div>
    );
};

export default Footer;
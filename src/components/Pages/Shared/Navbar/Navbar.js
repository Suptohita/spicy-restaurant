import React from 'react';
import logo from './image/logo.svg'
import Button from "@material-tailwind/react/Button";





const Navbar = () => {
    return (
        <div className='flex lg:mx-72 md:justify-between sm:justify-center m-8 items-center'>
            <div>
                <a  href='tel:63847293424'>
                    <i class="fas fa-phone bg-yellow-500 text-white rounded-full ring ring-yellow-500 ring-offset-2 p-3 mr-3"></i>
                    <h3 className='md:inline hidden md:text-lg font-medium hover:text-yellow-500'>Hotline</h3>
                </a>
            </div>

            <div className='mx-10'>
                <img className='w-40' src={logo} alt="hello" />
            </div>
            
            <div className='flex items-center'>
                <div>
                    <h5 className='md:text-lg cursor-pointer font-medium hover:text-yellow-500 hidden md:inline'>Want a table?</h5>
                </div>
                <div>
                    <h2><i class="fas fa-calendar-minus md:ml-4 bg-yellow-500 text-white rounded-full ring ring-yellow-500 ring-offset-2 p-3"></i></h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
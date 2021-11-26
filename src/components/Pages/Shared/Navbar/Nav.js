import React from 'react';
import logo from './image/logo.svg'
import './Nav.css'






const Nav = () => {
    return (
        <div>
            <div className='flex lg:mx-72 md:justify-between sm:justify-center m-5 items-center'>
                <div>
                    <a href='tel:63847293424'>
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

            <div className='flex bg-gray-50 p-3 lg:mx-72 justify-center items-center'>
                <h1 className='inline md:mx-5 mx-1 text-lg font-medium hover:text-yellow-500 cursor-pointer '>Menu</h1>
                <h1 className='inline md:mx-5 mx-1 text-lg font-medium hover:text-yellow-500 cursor-pointer '>About</h1>
                <h1 className='inline md:mx-5 mx-1 text-lg font-medium hover:text-yellow-500 cursor-pointer '>Contact</h1>
                <h1 className='inline md:mx-5 mx-1 text-lg font-medium hover:text-yellow-500 cursor-pointer '>Pages</h1>

                <h5 className='text-lg font-medium md:ml-32 lg:ml-72 border-l-2 border-gray-600'>
                    <div class="dropdown inline-block ml-2 text-white text-sm bg-gray-700 hover:bg-yellow-500 mr-2 rounded-full border-t-8 pl-2 pt-1 pb-1">
                        <i class="fas fa-user mr-2"></i>
                        <ul class="dropdown-menu absolute hidden text text-gray-700 pt-4">
                            <li class="">
                                <h5 class="rounded-t border-black  bg-gray-200 hover:bg-yellow-300 py-2 px-4 block whitespace-no-wrap" href="a">Arvind Debnath</h5>
                            </li>

                            <li class="">
                                <a class="bg-gray-200 hover:bg-yellow-300 py-2 px-4 block whitespace-no-wrap" href="a">My review</a>
                            </li>

                            <li class="">
                                <h5 class="rounded-b bg-gray-200 py-3 px-4 block whitespace-no-wrap" href="a"><span className='hover:bg-yellow-500 p-1 cursor-pointer rounded'>Login</span></h5>
                            </li>
                        </ul>
                    </div>

                    <div className='inline cursor-pointer'>
                        <i class="fas pl-1 fa-clipboard-list text-2xl hover:text-yellow-500 text-red-400 mr-2 ml-2 border-l-2 border-gray-600"></i>
                        <span className='hidden md:inline text-gray-600 hover:text-yellow-500 font-medium text-base'>bookings</span>
                    </div>
                </h5>

                
            </div>
        </div>
    );
};

export default Nav;
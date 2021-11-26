import React from 'react';
import dish from './Images/dish.png'

const Header = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-center lg:text-left text-center items-center md:mt-28 md:mb-20 mt-12 mb-12'>
            <div>
                <h5 className='text-xl text-yellow-500 font-bold mt-2'>Food Service</h5>
                <h1 className='md:text-6xl text-4xl font-bold mt-1'>Welcome to our <br /> restautant</h1>

                <h1 className='text-xl text-gray-600 font-medium mt-9'><i class="fas fa-map-pin pt-1.5 pb-0.5 pr-2 pl-2 text-white bg-yellow-500 rounded-full"></i> 32 Annie's Road, San Andreas, Los Angeles</h1>

                <p className='text-lg font-base text-gray-500 hidden md:block'>
                    Local cuisine, Italian, European, Vegetarian Friendly Restaurant. <br /> We Provide Best Service In City.We Serve 100% Fresh And Organic Food.
                </p>

                <div className="mt-8">
                    <button className='bg-yellow-500 p-2 px-7 mr-3 text-white font-bold hover:bg-yellow-600'>Book a table</button>
                    <button className='border border-yellow-500 p-1.5 px-7 font-bold hover:bg-yellow-500 hover:text-white'>Discover more</button>
                </div>
            </div>

            <div>
                <img src={dish} alt="" />
            </div>
        </div>
    );
};

export default Header;
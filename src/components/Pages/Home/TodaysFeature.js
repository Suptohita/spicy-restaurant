import React from 'react';
import plate from './Images/plate.png'

const TodaysFeature = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-center lg:text-left text-center items-center md:mt-28 md:mb-20 mt-12 mb-12 bg-gray-50 pb-7'>
            <div>
                <img className='lg:max-w-xl' src={plate} alt="" />
            </div>
            <div className='lg:ml-14 lg:mt-0 mt-10'>
                <h5 className='text-lg text-yellow-500 font-bold'>TODAY'S MAIN DISH</h5>
                <h1 className='text-4xl font-bold mt-2 mb-1'>Vegetable Omelete</h1>
                <p className='text-lg font-base text-gray-500 hidden md:block'>World’s Best Vegetarian Omelette, for a healthy and happy start of your day. <br/> Cooked with broccoli, eggs and sun-dried tomatoes.You’d be surprised how this omelette taste.</p>
                <p className='text-lg font-base text-gray-500 md:hidden'>World's Best Vegetarian Omelette. For a healthy and happy start of your day.</p>
                <div className="mt-8">
                    <button className='bg-yellow-500 p-2 px-7 mr-3 text-white font-bold hover:bg-yellow-600'>Book a table</button>
                    <button className='border border-yellow-500 p-1.5 px-7 font-bold hover:bg-yellow-500 hover:text-white'>Discover more</button>
                </div>
            </div>
        </div>
    );
};

export default TodaysFeature;
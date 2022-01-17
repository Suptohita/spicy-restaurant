import React from 'react';

const OpeningHour = () => {
    return (
            <div className='bg-gray-100 pt-10 pb-10 mt-16 lg:flex justify-between md:mx-28 lg:mx-80 items-center rounded-lg'>
                <div className='lg:ml-20'>
                    <h5 className='text-yellow-500  font-bold text-sm'>AVAILABILITY</h5>
                    <h1 className='text-3xl text-left font-bold mt-1'>Opening hour</h1>
                </div>
                <div className='flex justify-center items-center mt-8 lg:mr-20'>
                    <div className='text-center'>
                        <h4 className='text-gray-500'>FROM</h4>
                        <h2 className='font-bold text-lg mb-2'>Monday</h2>
                        <h6 className='text-gray-500'>08:00 AM</h6>
                    </div>
                    <div>
                        <i className="fas fa-clock text-5xl text-yellow-500 px-6"></i>
                    </div>
                    <div className='text-center'>
                        <h4 className='text-gray-500'>UNTIL</h4>
                        <h2 className='font-bold text-lg mb-2'>Friday</h2>
                        <h6 className='text-gray-500'>10:00 PM</h6>
                    </div>
                </div>
            </div>
    );
};

export default OpeningHour;
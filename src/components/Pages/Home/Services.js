import React from 'react';
import coffe_cup from './Images/coffee-default.svg'
import cutlery from './Images/cutlery-default.svg'
import invoice from './Images/invoice-default.svg'
import no_smoking from './Images/no-smoking-default.svg'
import './Services.css'

const Services = () => {
    return (
        <div className='text-center mt-20 bg-gray-50 pt-16 pb-16'>
            <div>
                <h5 className='text-sm text-yellow-500 font-bold'>OUR SERVICE</h5>
                <h1 className='text-3xl font-bold'>All your needs in one place</h1>
            </div>
            <div className='mt-8 mb-4 flex justify-center flex-wrap'>
                <div className='p-10 mr-5 service'>
                    <img className='md:ml-12 ml-16 mb-4' src={coffe_cup} alt="" />
                    <h5 className='text-xl font-bold'>Awesome Drinks</h5>
                </div>
                <div className='p-10 mr-5 service'>
                    <img className='ml-12 mb-4' src={cutlery} alt="" />
                    <h5 className='text-xl font-bold'>Classy Service</h5>
                </div>
                <div className='p-10 mr-5 service'>
                    <img className='md:ml-12 ml-16 mb-4' src={invoice} alt="" />
                    <h5 className='text-xl font-bold'>Diversified Menu</h5>
                </div>
                <div className='p-10 mr-5 service'>
                    <img className='md:ml-12 ml-16 mb-4' src={no_smoking} alt="" />
                    <h5 className='text-xl font-bold'>Fresh Atmosphere</h5>
                </div>
            </div>
        </div>
    );
};

export default Services;
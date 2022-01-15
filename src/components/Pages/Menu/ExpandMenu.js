import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Navbar/Nav';
import './ExpandMenu.css'

const expandMenu = () => {

    return (
        <div id='hello'>
            <div className='bg-white'>
                <Nav></Nav>
                <div className='text-center lg:mx-72 md:mx-10 mx-2 md:mt-24 mt-12'>
                    <h6 className='text-lg text-yellow-500 font-bold'>THE MENU</h6>
                    <h2 className='text-5xl mb-4 mt-2 font-bold'>Our food menu</h2>
                    <p className='text-center text-lg font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore suscipit.</p>
                    <button className='bg-yellow-500 p-1.5 px-8 mr-3 mt-5 text-white font-bold hover:bg-yellow-600'>Book a table</button>
                </div>
                <hr className='lg:mx-72 md:mx-10 mx-2 my-7 border-8 border-gray-100 rounded-full' />

                {/* signature dish  */}
                <div className='pb-10'>
                    <h6 className='pt-10 text-center text-sm text-yellow-500 font-bold'>SIGNATURE DISHES</h6>
                    <h2 className='text-center font-bold text-3xl mt-2'>Our Signature Dishes</h2>
                </div>
            </div>


            {/* pizza  */}
            <div className='mt-52 py-10 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>OUR PIZZAS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Try our pizzas</h1>
            </div>

            {/* salads  */}
            <div className='mt-52 py-10 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>SALADS DISHES</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Choose from our salads</h1>
            </div>

            {/* drinks  */}
            <div className='mt-52 py-10 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>FRESH DRINKS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Our fresh drinks</h1>
            </div>
            
            {/* pastas  */}
            <div className='mt-52 py-10 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>PASTAS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Our Pastas</h1>
            </div>

            {/* Deserts  */}
            <div className='mt-52 py-10 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>DESERTS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Time for deserts</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default expandMenu;
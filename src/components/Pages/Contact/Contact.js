import React from 'react';
import Nav from '../Shared/Navbar/Nav';
import branch from './images/branch.jpg'

const Contact = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='text-center lg:mx-72 md:mx-10 mx-2 md:mt-24 mt-12 pb-24'>
                <h6 className='text-sm text-yellow-500 font-bold'>DROP US A LINE</h6>
                <h2 className='text-5xl mb-4 mt-2 font-bold'>Contact us</h2>
                <p className='text-center text-lg lg:px-96 md:px-32 font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis, voluptatem reiciendis inventore, quos explicabo quod beatae libero necessitatibus aliquam.</p>
                <button className='bg-yellow-500 p-1.5 px-8 mr-3 mt-12 text-white font-bold hover:bg-yellow-600'>Book a table</button>
            </div>
            <hr className='lg:mx-96 md:mx-10 mx-5 my-7 border-8 border-gray-100 rounded-full' />
            <div className='flex'>
                <div>
                    <img src={branch} alt='restuarnt location' className='mb-12 w-md-5 ' />
                </div>
                <div>
                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
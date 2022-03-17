import React from 'react';
import Nav from '../Shared/Navbar/Nav';
import Footer from '../Shared/Footer/Footer'
import branch from './images/branch.jpg'

const Contact = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
                <div className='text-center lg:mx-72 md:mx-10 mx-2 md:mt-24 mt-12 pb-24'>
                    <h6 className='text-sm text-yellow-500 font-bold'>DROP US A LINE</h6>
                    <h2 className='text-5xl mb-4 mt-2 font-bold'>Contact us</h2>
                    <p className='text-center text-lg lg:px-96 md:px-32 font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis, voluptatem reiciendis inventore, quos explicabo quod beatae libero necessitatibus aliquam.</p>
                    <button className='bg-yellow-500 p-1.5 px-8 mr-3 mt-12 text-white font-bold hover:bg-yellow-600'>Book a table</button>
                </div>
                <hr className='lg:mx-96 md:mx-10 mx-5 my-7 border-8 border-gray-100 rounded-full' />
                <div className='flex md:flex-row flex-col md:items-start items-center justify-center'>
                    <div className='lg:w-1/3'>
                        <img src={branch} alt='restuarnt location' className='mb-12 h-96' />
                    </div>
                    <iframe className='' width={400} height={384} id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div className='flex justify-between bg-yellow-500 pt-10 pb-10 lg:ml-96 lg:mr-96 lg:pr-12 ml-1 md:pl-20 pl-12 rounded-lg md:-m-12 mb-20'>
                    <div>
                        <h3 className='text-white mb-2'>Spicy restuarnt New York</h3>
                        <h4 className='text-white'><i class="fas fa-globe-africa mr-2"></i> Broadway, New York, NY, USA</h4>
                    </div>
                </div>
            </div>
            <div className='md:mt-32'>
                <Footer></Footer>
            </div> 
        </div>
    );
};

export default Contact;
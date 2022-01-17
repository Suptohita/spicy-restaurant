import React from 'react';
import Chef from '../Home/Chef';
import Gallery from '../Home/Gallery';
import OpeningHour from '../Home/OpeningHour';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Navbar/Nav';
import about1 from './images/about-us-1.jpg'
import about2 from './images/about-us-2.jpg'
import about3 from './images/about-us-3.jpg'
import clock from './images/clock.svg'
import cutlery from './images/cutlery.svg'
import invoice from './images/invoice.svg'



const About = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='text-center lg:mx-72 md:mx-10 mx-2 md:mt-24 mt-12 pb-24'>
                    <h6 className='text-sm text-yellow-500 font-bold'>WHO ARE WE</h6>
                    <h2 className='text-5xl mb-4 mt-2 font-bold'>About Us</h2>
                    <p className='text-center text-lg lg:px-64 md:px-32 font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis, voluptatem reiciendis inventore, quos explicabo quod beatae libero necessitatibus aliquam perferendis rem itaque suscipit eos perspiciatis similique nostrum eaque provident.</p>
                    <button className='bg-yellow-500 p-1.5 px-8 mr-3 mt-12 text-white font-bold hover:bg-yellow-600'>Book a table</button>
                </div>
                <hr className='lg:mx-72 md:mx-10 mx-5 my-7 border-8 border-gray-100 rounded-full' />

                <div className='lg:mx-72 md:mx-10 mx-2 grid lg:grid-cols-3 md:grid-cols-2 pt-20 md:pb-48 pb-16'>
                    <div>
                        <img style={{height:'450px', width:'100%', objectFit:'cover'}} src={about1} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center md:my-0 my-20'>
                        <img src={cutlery} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Quality food</h3>
                        <h6 className='text-center px-16 mt-3 font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloremque cum optio, repudiandae assumenda maiores!</h6>
                    </div>
                    <div className='lg:mt-0 mt-3'>
                        <img style={{height:'450px', width:'100%', objectFit:'cover'}} src={about2} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center lg:mt-0 md:mt-3 my-20'>
                        <img src={invoice} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Original recipes</h3>
                        <h6 className='text-center px-16 mt-3 font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, corporis repudiandae. In dolorem accusamus perferendis!</h6>
                    </div>
                    <div className='lg:mt-0 mt-3'>
                        <img style={{height:'450px', width:'100%', objectFit:'cover'}} src={about3} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center lg:mt-0 md:mt-3 md:my-0 my-20'>
                        <img src={clock} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Fastest delivery</h3>
                        <h6 className='text-center px-16 mt-3 font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio porro, magni provident inventore quibusdam.</h6>
                    </div>
                </div>
                <div className='text-center mb-48'>
                    <h6 className='text-yellow-500 font-bold'>OUR VISION</h6>
                    <h2 className='text-4xl mt-2 mb-12 font-bold'>Our philosophy</h2>
                    <p className='lg:px-72 lg:mx-72 md:px-32 text-2xl text-gray-600 mb-6'><span className="text-yellow-500 text-5xl font-bold">L</span>orem ipsum dolor sit amet consectetur, adipisicing elit. Sed suscipit fugit dolorum eaque ab corrupti, consequuntur earum porro temporibus nemo cum quasi aspernatur dignissimos repellat, assumenda, beatae quas incidunt laboriosam.</p>
                    <h6 className='text-xl font-bold mb-1'>Arvind Debnath</h6>
                    <h6 className='text-xm font-semibold text-yellow-500'>Spicy Restaurant CEO</h6>
                </div>
                <Chef></Chef>
                <div className="my-32">
                    <Gallery></Gallery>
                </div>
                <div className="mb-28">
                    <OpeningHour></OpeningHour>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default About;
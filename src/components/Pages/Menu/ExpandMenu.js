import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Navbar/Nav';
import './ExpandMenu.css'

const ExpandMenu = () => {
    const [menu, setMenu] = useState([])


    useEffect(() => {
        fetch('https://suptohita-spicy-restaurant.herokuapp.com/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    console.log(menu.slice(3,7))

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
                <hr className='lg:mx-72 md:mx-10 mx-5 my-7 border-8 border-gray-100 rounded-full' />

                {/* signature dish  */}
                <div className='pb-10 mx-52'>
                    <h6 className='pt-10 text-center text-sm text-yellow-500 font-bold'>SIGNATURE DISHES</h6>
                    <h2 className='text-center font-bold text-3xl mt-2'>Our Signature Dishes</h2>
                    <div className='grid gap-6 lg:mx-96 md:mx-48 mt-12 mx-5 pb-40'>
                    {
                        menu.slice(3,7).map(pizza => <h6 key={pizza._id} className='flex justify-between bg-white py-3 px-5 border-l-4 border-yellow-500'>
                            <div>
                                <i className='shadow-lg shadow-black bg-yellow-500 font-bold px-2 py-0.5 pt-4'>${pizza.price}</i>
                                <h6 className='text-lg font-bold'>{pizza.name}</h6>
                                <p className='font-semibold text-gray-500'>{pizza.description.slice(0, 20)}...</p>
                            </div>
                            <img className='rounded-full' src={pizza.img} style={{ height: '70px', width: '70px' }} alt="" />
                        </h6>)
                    }
                </div>
                </div>
            </div>


            {/* pizza  */}
            <div className='md:mt-48 mt-32 md:py-32 py-20 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>OUR PIZZAS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Try our pizzas</h1>
                <div className='grid md:grid-cols-2 gap-6 lg:mx-96 md:mx-16 mt-12 mx-5'>
                    {
                        menu.filter(items => items.category === 'pizza').map(pizza => <h6 key={pizza._id} className='flex justify-between bg-white py-3 px-5 border-l-4 border-yellow-500'>
                            <div>
                                <i className='shadow-lg shadow-black bg-yellow-500 font-bold px-2 py-0.5 pt-4'>${pizza.price}</i>
                                <h6 className='text-lg font-bold'>{pizza.name}</h6>
                                <p className='font-semibold text-gray-500'>{pizza.description.slice(0, 20)}...</p>
                            </div>
                            <img className='rounded-full' src={pizza.img} style={{ height: '70px', width: '70px' }} alt="" />
                        </h6>)
                    }
                </div>
            </div>

            {/* salads  */}
            <div className='md:mt-48 mt-32 md:py-32 py-20 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>SALADS DISHES</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Choose from our salads</h1>
                <div className='grid md:grid-cols-2 gap-6 lg:mx-96 md:mx-16 mt-12 mx-5'>
                    {
                        menu.filter(items => items.category === 'Salad').map(salad => <h6 key={salad._id} className='flex justify-between bg-white py-3 px-5 border-l-4 border-yellow-500'>
                            <div>
                                <i className='shadow-lg shadow-black bg-yellow-500 font-bold px-2 py-0.5 pt-4'>${salad.price}</i>
                                <h6 className='text-lg font-bold'>{salad.name}</h6>
                                <p className='font-semibold text-gray-500'>{salad.description.slice(0, 20)}...</p>
                            </div>
                            <img className='rounded-full' src={salad.img} style={{ height: '70px', width: '70px' }} alt="" />
                        </h6>)
                    }
                </div>
            </div>

            {/* drinks  */}
            <div className='md:mt-48 mt-32 md:py-32 py-20 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>FRESH DRINKS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Our fresh drinks</h1>
                <div className='grid md:grid-cols-2 gap-6 lg:mx-96 md:mx-16 mt-12 mx-5'>
                    {
                        menu.filter(items => items.category === 'Drink').map(drink => <h6 key={drink._id} className='flex justify-between bg-white py-3 px-5 border-l-4 border-yellow-500'>
                            <div>
                                <i className='shadow-lg shadow-black bg-yellow-500 font-bold px-2 py-0.5 pt-4'>${drink.price}</i>
                                <h6 className='text-lg font-bold'>{drink.name}</h6>
                                <p className='font-semibold text-gray-500'>{drink.description.slice(0, 20)}...</p>
                            </div>
                            <img className='rounded-full' src={drink.img} style={{ height: '70px', width: '70px' }} alt="" />
                        </h6>)
                    }
                </div>
            </div>

            {/* pastas  */}
            <div className='md:mt-48 mt-32 md:py-32 py-20 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>PASTAS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Our Pastas</h1>
                <div className='grid md:grid-cols-2 gap-6 lg:mx-96 md:mx-16 mt-12 mx-5'>
                    {
                        menu.filter(items => items.category === 'Pasta').map(pasta => <h6 key={pasta._id} className='flex justify-between bg-white py-3 px-5 border-l-4 border-yellow-500'>
                            <div>
                                <i className='shadow-lg shadow-black bg-yellow-500 font-bold px-2 py-0.5 pt-4'>${pasta.price}</i>
                                <h6 className='text-lg font-bold'>{pasta.name}</h6>
                                <p className='font-semibold text-gray-500'>{pasta.description.slice(0, 20)}...</p>
                            </div>
                            <img className='rounded-full' src={pasta.img} style={{ height: '70px', width: '70px' }} alt="" />
                        </h6>)
                    }
                </div>
            </div>

            {/* Deserts  */}
            <div className='md:mt-48 mt-32 md:py-32 py-20 bg-white'>
                <h6 className='text-center text-sm text-yellow-500 font-bold'>DESERTS</h6>
                <h1 className='text-center font-bold  mt-2 text-3xl'>Time for deserts</h1>
                <div className='grid md:grid-cols-2 gap-6 lg:mx-96 md:mx-16 mt-12 mx-5'>
                    {
                        menu.filter(items => items.category === 'Desert').map(desert => <h6 key={desert._id} className='flex justify-between bg-white py-3 px-5 border-l-4 border-yellow-500'>
                            <div>
                                <i className='shadow-lg shadow-black bg-yellow-500 font-bold px-2 py-0.5 pt-4'>${desert.price}</i>
                                <h6 className='text-lg font-bold'>{desert.name}</h6>
                                <p className='font-semibold text-gray-500'>{desert.description.slice(0, 20)}...</p>
                            </div>
                            <img className='rounded-full' src={desert.img} style={{ height: '70px', width: '70px' }} alt="" />
                        </h6>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ExpandMenu;
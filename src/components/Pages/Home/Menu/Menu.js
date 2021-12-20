import React, { useEffect, useState } from 'react';
import MenuNav from './MenuNav';


const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])


    return (
        <div className='bg-gray-50 py-16'>

        <h6 className='text-yellow-500 text-sm text-center font-bold'>FULL DISHES LIST</h6>
        <h1 className='text-center text-3xl font-bold mt-2 mb-5'>Our Food Menu</h1>

            <div className='flex md:justify-center'>
                <span className="bg-white p-4 flex md:justify-center justify-around mx-5 mb-4">
                    <h6 className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-6 md:py-2 py-1.5 px-2 md:text-xl '>All</h6>
                    <h6 className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Pizzas</h6>
                    <h6 className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl'>Drinks</h6>
                    <h6 className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Deserts</h6>
                    <h6 className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Pastas</h6>
                    <h6 className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Salads</h6>
                </span>
            </div>

            <div className='bg-white'>
                {
                    menu.map(items =>
                        <h6 className='flex md:justify-evenly justify-between'>
                            <div>
                                <h6>{items.name}</h6>
                                <p>{items.description.slice(0, 20)}...</p>
                            </div>
                            <img className='rounded-full' src={items.img} style={{ height: '92px', width: '92px' }} alt="" />
                        </h6>
                    )
                }
            </div>
        </div>
    );
};

export default Menu;
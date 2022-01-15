import React, { useState, useEffect } from 'react';
import './scrollBar.css'


const FeatureDishes = () => {
    const [dishes, setDishes] = useState([])

    useEffect(() => {
        fetch('https://suptohita-spicy-restaurant.herokuapp.com/feature-dish')
            .then(res => res.json())
            .then(data => setDishes(data.slice(0, 6)))
    }, [])


    return (
        <div className='my-20'>
            <div>
                <h6 className='text-yellow-500 text-sm text-center font-bold'>FEATURED DISHES</h6>
                <h1 className='text-center text-3xl font-bold mt-2 mb-5'>Our Featured Dishes</h1>
            </div>
            <div className='flex items-center text-center lg:mx-72 md:mx-10 mx-2 overflow-y-hidden scroll-bar'>
                {
                    dishes.map(dish => <div key={dish._id} style={{ height: '450px', minWidth: '310px' }} className='bg-gray-50 m-3 outline-none hover:border-yellow-500 border-transparent border-4 cursor-pointer'>
                        <img className='w-36 h-36 ml-20 mb-10 mt-10 rounded-full' src={dish.img} alt="" />
                        <h1 className='font-bold text-xl hover:text-yellow-500 mb-4'>{dish.name}</h1>
                        <p className='text-lg font-medium text-gray-600 mb-3'>{dish.description}</p>
                        <h6 className='font-extrabold text-yellow-500'>$ {dish.price}</h6>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeatureDishes;
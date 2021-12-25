import React, { useEffect, useState } from 'react';


const Menu = () => {
    const [menu, setMenu] = useState([])
    const [category, setCategory] = useState('pizza')

    

    useEffect(() => {
        fetch('http://localhost:8000/menu')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === category)))
    }, [category])

    
    
    const pizzas = () =>{
        setCategory('pizza')
    }
    const drinks = () =>{
        setCategory('Drink')
    }
    const deserts = () =>{
        setCategory('Desert')
    }
    const pastas = () =>{
        setCategory('Pasta')
    }
    const salads = () =>{
        setCategory('Salad')
    }


    return (
        <div className='bg-gray-50 pt-24 pb-36'>
            <h6 className='text-yellow-500 text-sm text-center font-bold'>FULL DISHES LIST</h6>
            <h1 className='text-center text-3xl font-bold mt-2 mb-5'>Our Food Menu</h1>

                <div className='flex md:justify-center'>
                    <span className="md:bg-white rounded md:px-32 p-3 flex md:justify-center justify-around md:mx-5 mb-4">
                        <h6 onClick={() => pizzas()} className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Pizzas</h6>
                        <h6 onClick={() => drinks()} className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl'>Drinks</h6>
                        <h6 onClick={() => deserts()} className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Deserts</h6>
                        <h6 onClick={() => pastas()} className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Pastas</h6>
                        <h6 onClick={() => salads()} className='font-semibold hover:text-white hover:bg-yellow-500 cursor-pointer md:px-4 md:py-2 py-1.5 px-2 md:text-xl '>Salads</h6>
                    </span>
                </div>

                <div className='grid md:grid-cols-2 gap-6 lg:mx-96 md:mx-16 mx-5'>
                    {
                        menu.map(items =>
                            <h6 key={items._id} className='flex justify-between bg-white py-3 px-5 border-l-4 border-yellow-500'>
                                <div>
                                    <i className='shadow-lg shadow-black bg-yellow-500 font-bold px-2 py-0.5 pt-4'>${items.price}</i>
                                    <h6 className='text-lg font-bold'>{items.name}</h6>
                                    <p className='font-semibold text-gray-500'>{items.description.slice(0, 20)}...</p>
                                </div>
                                <img className='rounded-full' src={items.img} style={{ height: '70px', width: '70px' }} alt="" />
                            </h6>
                        )
                    }
                </div>
        </div>
    );
};

export default Menu
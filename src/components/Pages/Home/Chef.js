import React, { useEffect, useState } from 'react';




const Chef = () => {

    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('https://suptohita-spicy-restaurant.herokuapp.com/chef')
            .then(res => res.json())
            .then(data => setChef(data))
    })

    return (
        <div className='my-14'>
            <div>
                <h6 className='text-yellow-500 text-sm text-center font-bold'>MASTERS OF COOKING</h6>
                <h1 className='text-center text-3xl font-bold mt-2 mb-5'>Our master chefs</h1>
            </div>
            <div className='flex justify-center text-center mx-1'>
                {
                    chef.map(chef => <div key={chef._id} className='hover:border-yellow-500 border-2 border-transparent hover:bg-yellow-500 pb-12'>
                        <img src={chef.img} alt="" />
                        <h1 className='md:font-bold font-semibold md:text-lg mt-5'>{chef.name}</h1>
                        <h1 className='md:font-medium text-gray-600'>{chef.Detail}</h1>
                        <div className='mt-4 cursor-pointer'>
                            <i className="fab md:text-base text-xs fa-facebook mx-2 hover:bg-white bg-yellow-500 rounded-full md:p-2 p-1"></i>
                            <i className="fab md:text-base text-xs fa-instagram-square mx-2 hover:bg-white bg-yellow-500 rounded-full md:p-2 p-1"></i>
                            <i className="fab md:text-base text-xs fa-twitter mx-2 hover:bg-white bg-yellow-500 rounded-full md:p-2 p-1"></i>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Chef;
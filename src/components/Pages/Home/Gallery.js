import React, { useEffect, useState } from 'react';
import './Gallery.css'

const Gallery = () => {
    const [foodImage, setFoodImage] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/gallery')
        .then(res => res.json())
        .then(data => setFoodImage(data.slice(0,8)))
    }, [])
    

    return (
        <div className='text-center mt-20 mb-16 lg:mx-48 md:mx-10'>
            <h6 className='text-yellow-500  font-bold text-sm'>OUR GALLERY</h6>
            <h6 className='text-3xl font-bold mt-1'>OUR GALLERY</h6>
            <div className='flex flex-wrap justify-center mt-6'>
            {
                foodImage.map(images =>
                    <img key={images._id} className='m-1 gallery-img cursor-pointer' style={{height:'225px', width:'300px', objectFit:'cover'}} src={images.image} alt="" />
                )
            }
            </div>
            <button className='bg-yellow-500 p-2 px-7 mr-3 mt-5 text-white font-bold hover:bg-yellow-600'>Discover More</button>
        </div>
    );
};

export default Gallery;
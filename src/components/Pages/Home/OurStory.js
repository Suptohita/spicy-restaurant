import React from 'react';

const OurStory = () => {
    return (
        <div className='text-center'>
            <h6 className='text-yellow-500 font-bold text-sm'>OUR STORY</h6>
            <h2 className='text-3xl font-bold mt-2 mb-1'>About our restaurant</h2>

            <p className='hidden md:block text-lg font-base text-gray-500 mt-2'>Every day, more than 1 million guests visit our restaurants around the world. <br />And they do so because our restaurants are known for serving high-quality, <br /> great-tasting, and affordable food.The original Home of the Whopper, our<br />commitment premium ingredients,recipes, and family-friendly dining.</p>

            <p className='md:hidden text-justify mx-5 text-lg font-base text-gray-500 mt-3'>
            Every day, more than 1 million guests visit our restaurants around the world.  And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food.The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining.
            </p>

            <button className='bg-yellow-500 p-2 px-7 mr-3 mt-5 text-white font-bold hover:bg-yellow-600'>Discover More</button>
        </div>
    );
};

export default OurStory;
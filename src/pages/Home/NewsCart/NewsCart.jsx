import React from 'react';
import { BsBookmark, BsShare, BsStar, BsStarHalf, BsStarFill, BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, author, title, image_url, details, rating, total_view } = news;

    const ratingIcons = {
        0: <BsStar />,
        0.5: <BsStarHalf />,
        1: <BsStarFill />,
        1.5: <><BsStarFill /><BsStarHalf /></>,
        2: <><BsStarFill /><BsStarFill /></>,
        2.5: <><BsStarFill /><BsStarFill /><BsStarHalf /></>,
        3: <><BsStarFill /><BsStarFill /><BsStarFill /></>,
        3.5: <><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></>,
        4: <><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></>,
        4.5: <><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></>,
        4.8: <><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></>,
        5: <><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></>,
    };

    return (
        <div className='border rounded-lg mb-8'>
            <div className='bg-gray-100 py-4 px-5 flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <figure><img className='w-10 rounded-full' src={author.img} alt="User Image" /></figure>
                    <div>
                        <h4 className='font-semibold'>{author.name}</h4>
                        <p className='text-sm text-gray-500'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <BsBookmark />
                    <BsShare />
                </div>
            </div>
            <div className='px-5'>
                <h1 className='my-5 text-xl font-bold'>{title}</h1>
                <img src={image_url} alt="" />
                <p className='mt-8 text-gray-600'>{details.substring(0,350)}...<Link to={`/news/${_id}`}><span className='text-orange-500 font-semibold cursor-pointer'>Read More</span></Link></p>
                <div className='border-b-2 my-5'></div>
            </div>
            <div className='px-5 flex justify-between items-center pb-5'>
                <div className='flex items-center gap-4'>
                    <span className='flex gap-2'>{ratingIcons[rating.number]}</span>
                    <p>{rating.number}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsEye />
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;
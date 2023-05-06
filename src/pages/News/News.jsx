import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
    const news = useLoaderData();
    const { _id, title, image_url, details, category_id } = news;
    return (
        <main>
            <section className='border p-7 rounded-md'>
                <img className='w-full' src={image_url} alt="" />
                <h1 className='text-2xl font-bold mt-6 mb-2'>{title}</h1>
                <p>{details}</p>
                <Link to={`/category/${category_id}`}>
                    <button className='flex items-center gap-2 bg-red-600 text-white px-6 py-2 mt-8'>
                        <FaArrowLeft />
                        <span>All news in this category</span>
                    </button>
                </Link>
            </section>
        </main>
    );
};

export default News;
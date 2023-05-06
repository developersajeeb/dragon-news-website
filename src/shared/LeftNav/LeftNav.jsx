import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-developersajeeb.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <section>
            <h3 className='text-xl font-bold'>All Category</h3>
            <ul className='mt-5'>
                {
                    categories.map(newsCT => <Link to={`/category/${newsCT.id}`}><li key={newsCT.id} className='hover:bg-gray-200 cursor-pointer py-4 px-4 duration-300 rounded-md font-semibold text-gray-500 hover:text-black'>{newsCT.name}</li></Link>)
                }
            </ul>
        </section>
    );
};

export default LeftNav;
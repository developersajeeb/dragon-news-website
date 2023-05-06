import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <h3 className='mb-5'>This Category News: {categoryNews.length}</h3>}
            {
                categoryNews.map(news => <NewsCart
                    key={news._id}
                    news = {news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;
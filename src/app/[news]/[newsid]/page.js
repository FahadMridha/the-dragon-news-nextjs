import { getSingleNews } from '@/utils/getSilgleNews';
import React from 'react';

const NewsDetailPage = ({params}) => {
    const {data} = await getSingleNews(params.newsid)
    return (
        <div>
            <h1>{params.newsid}</h1>
        </div>
    );
};

export default NewsDetailPage;
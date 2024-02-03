import React from 'react';

const DynamicNewsPage = ({params , searchParams}) => {
    // console.log(params);
    return (
        <div>
            <h1>Dynamic news page. {searchParams.category}</h1>1
        </div>
    );
};

export default DynamicNewsPage;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoriesItemBooks = () => {
    const categoriesAllBook=useLoaderData();
    return (
        <div>
            <h1>ccccccccccc</h1>
            <h2>{categoriesAllBook.length}</h2>
        </div>
    );
};

export default CategoriesItemBooks;
import React from 'react';

const MyItemProducts = ({sellerBook}) => {
    const {_id,bookName,category,resalePrice,salesStatus,advertised}=sellerBook;
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">


        <td className="p-3">
            <p>{bookName}</p>
        </td>
        <td className="p-3">
            <p>{category}</p>
        </td>
        <td className="p-3">
            <p>{resalePrice}</p>
           
        </td>
        <td className="p-3">
            <p>{salesStatus}</p>
            
        </td>
        <td className="p-3 text-right">
            <button className="btn btn-primary">Add</button>
        </td>
        <td className="p-3 text-right">
            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                <button className="btn btn-secondary">Delete</button>
            </span>
        </td>
    </tr>

    );
};

export default MyItemProducts;
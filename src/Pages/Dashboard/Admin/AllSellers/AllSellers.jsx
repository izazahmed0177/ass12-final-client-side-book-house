import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSellers = () => {
    const allSellers = useLoaderData();
    return (
        <div>
            {/* <h1>My Products</h1>
        <h2>{sellerBooks.length}</h2> */}
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">My Seller</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>

                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />

                            </colgroup>

                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Seller No</th>
                                    <th className="p-3">Seller Id</th>
                                    <th className="p-3">Seller Name</th>
                                    <th className="p-3">Seller Email</th>
                                    <th className="p-3 text-right">Verified</th>
                                    <th className="p-3">Remove Seller</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    allSellers &&
                                    allSellers?.map((allSeller, i) =>
                                        <tr key={allSeller._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">

                                            <td className="p-3">
                                                <p>{i+1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allSeller._id}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allSeller.name}</p>
                                                
                                            </td>
                                            <td className="p-3">
                                                <p>{allSeller.email}</p>
                                               
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

                                    )
                                }





                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;
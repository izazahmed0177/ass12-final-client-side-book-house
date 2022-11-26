import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    const allBuyers = useLoaderData();
    return (
        <div>
            {/* <h1>All Buyers</h1> */}

            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">My Buyers</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>

                                <col />
                                <col />
                                <col />
                                <col />
                                {/* <col /> */}
                                <col className="w-24" />

                            </colgroup>

                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Buyer No</th>
                                    <th className="p-3">Buyer Id</th>
                                    <th className="p-3">Buyer Name</th>
                                    <th className="p-3">Buyer Email</th>
                                    {/* <th className="p-3 text-right">Verified</th> */}
                                    <th className="p-3">Remove Buyer</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    allBuyers &&
                                    allBuyers?.map((allBuyer, i) =>
                                        <tr key={allBuyer._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">

                                            <td className="p-3">
                                                <p>{i+1}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allBuyer._id}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{allBuyer.name}</p>
                                                
                                            </td>
                                            <td className="p-3">
                                                <p>{allBuyer.email}</p>
                                               
                                            </td>
                                            {/* <td className="p-3 text-right">
                                                <button className="btn btn-primary">Add</button>
                                            </td> */}
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

export default AllBuyers;
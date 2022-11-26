import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import MyItemProducts from './MyItemProducts';

const MyProducts = () => {
    const { dbUser } = useContext(AuthContext)
    // const [sellerBooks,setSellerBook]=useState([]);

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/seller/${dbUser._id}`)
    //     .then(res=>res.json())
    //     .then(data=>setSellerBook(data))
    // },[sellerBooks])


    const { data: sellerBooks, isLoading } = useQuery({
        queryKey: ['sellerBooks'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/seller/${dbUser._id}`)
                const data = await res.json();
                return data;
            } catch (error) {

            }
        }
    })

    if (isLoading) {
        return <h1>loding......</h1>

    }




    return (
        <div>
            {/* <h1>My Products</h1>
            <h2>{sellerBooks.length}</h2> */}
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">My Books</h2>
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
                                    <th className="p-3">Book Name</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Resale Price</th>
                                    <th className="p-3">Sales Status</th>
                                    <th className="p-3 text-right">Advertised</th>
                                    <th className="p-3">Remove Item</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    sellerBooks.map(sellerBook => <MyItemProducts key={sellerBook._id} sellerBook={sellerBook}></MyItemProducts>)


                                }

                                {/* <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">

					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<button className="btn btn-primary">Add</button>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<button className="btn btn-secondary">Delete</button>
						</span>
					</td>
				</tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;